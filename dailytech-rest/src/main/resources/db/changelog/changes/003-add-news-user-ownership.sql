--liquibase formatted sql

--changeset codex:003-add-news-user-ownership
ALTER TABLE news
    ADD COLUMN user_userid BIGINT NULL;

ALTER TABLE news
    ADD CONSTRAINT fk_news_on_user FOREIGN KEY (user_userid) REFERENCES users (userid);

CREATE INDEX idx_news_user_userid ON news (user_userid);
