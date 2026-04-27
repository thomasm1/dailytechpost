--liquibase formatted sql
--changeset thomasm1:004 labels:news runOnChange:false comment:Add public/private visibility to news links
--preconditions onFail:MARK_RAN onError:HALT
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM information_schema.columns WHERE table_schema = DATABASE() AND table_name = 'news' AND column_name = 'public_link'

ALTER TABLE news
    ADD COLUMN public_link BIT NOT NULL DEFAULT 1;

UPDATE news
SET public_link = 1
WHERE public_link IS NULL;

--rollback ALTER TABLE news DROP COLUMN public_link;
