--liquibase formatted sql
--changeset codex:005-add-news-normalized-url labels:news runOnChange:false comment:Add normalized URL column to news links
--preconditions onFail:MARK_RAN onError:HALT
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM information_schema.columns WHERE table_schema = DATABASE() AND table_name = 'news' AND column_name = 'normalized_url'

ALTER TABLE news
    ADD COLUMN normalized_url VARCHAR(2048) NULL;

UPDATE news
SET normalized_url = TRIM(TRAILING '/' FROM REGEXP_REPLACE(LOWER(TRIM(url)), '^(https?://)?(www\\.)?', ''))
WHERE url IS NOT NULL
  AND normalized_url IS NULL;

--rollback ALTER TABLE news DROP COLUMN normalized_url;

--changeset codex:006-add-news-normalized-url-hash labels:news runOnChange:false comment:Add fixed-length normalized URL hash for indexing
--preconditions onFail:HALT onError:HALT
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM information_schema.columns WHERE table_schema = DATABASE() AND table_name = 'news' AND column_name = 'normalized_url_hash'

ALTER TABLE news
    ADD COLUMN normalized_url_hash CHAR(64) NULL;

UPDATE news
SET normalized_url_hash = SHA2(normalized_url, 256)
WHERE normalized_url IS NOT NULL
  AND normalized_url_hash IS NULL;

--rollback ALTER TABLE news DROP COLUMN normalized_url_hash;

--changeset codex:007-add-news-user-normalized-url-hash-unique labels:news runOnChange:false comment:Prevent duplicate normalized news URLs per user
--preconditions onFail:HALT onError:HALT
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM (SELECT user_userid, normalized_url_hash FROM news WHERE user_userid IS NOT NULL AND normalized_url_hash IS NOT NULL GROUP BY user_userid, normalized_url_hash HAVING COUNT(*) > 1) duplicate_news_urls
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM information_schema.table_constraints WHERE table_schema = DATABASE() AND table_name = 'news' AND constraint_name = 'uq_news_user_normalized_url_hash'

ALTER TABLE news
    ADD CONSTRAINT uq_news_user_normalized_url_hash UNIQUE (user_userid, normalized_url_hash);

--rollback ALTER TABLE news DROP INDEX uq_news_user_normalized_url_hash;
