-- Ensure schema exists (no-op if already created by your app)
CREATE SCHEMA IF NOT EXISTS dailytech DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

CREATE TABLE  IF NOT EXISTS  dailytech.roles
(
    id   BIGINT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255)          NOT NULL,
    CONSTRAINT pk_roles PRIMARY KEY (id),
    CONSTRAINT uc_roles_name UNIQUE (name)
);

CREATE TABLE  IF NOT EXISTS  dailytech.users
(
    userid           BIGINT AUTO_INCREMENT NOT NULL,
    username         VARCHAR(255)       NULL,
    password         VARCHAR(255)       NULL,
    lastname         VARCHAR(255)       NULL,
    firstname        VARCHAR(255)       NULL,
    usertype         INT                NULL,
    email            VARCHAR(255)       NOT NULL,
    organizationcode VARCHAR(255)       NULL,
    cusurl           VARCHAR(255)       NULL,
    dashboardcode    VARCHAR(255)       NULL,
    isactive         INT                NULL,
    contacttype      INT                NULL,
    CONSTRAINT pk_users PRIMARY KEY (userid)
);

CREATE TABLE  IF NOT EXISTS  dailytech.users_roles
(
    role_id BIGINT NOT NULL,
    user_id BIGINT    NOT NULL,
    CONSTRAINT pk_users_roles PRIMARY KEY (role_id, user_id),
    CONSTRAINT fk_userol_on_role FOREIGN KEY (role_id) REFERENCES dailytech.roles (id),
    CONSTRAINT fk_userol_on_user FOREIGN KEY (user_id) REFERENCES dailytech.users (userid)
);


CREATE TABLE  IF NOT EXISTS  dailytech.categories
(
    id            BIGINT AUTO_INCREMENT NOT NULL,
    name          VARCHAR(255)          NULL,
    `description` VARCHAR(255)          NULL,
    CONSTRAINT pk_categories PRIMARY KEY (id)
);

CREATE TABLE  IF NOT EXISTS  dailytech.post_entity
(
    id            BIGINT AUTO_INCREMENT NOT NULL,
    did           VARCHAR(255)          NOT NULL,
    post_date     VARCHAR(255)          NULL,
    author        VARCHAR(255)          NULL,
    month_order   VARCHAR(255)          NULL,
    cat3          VARCHAR(255)          NULL,
    title         VARCHAR(255)          NOT  ,
    post          VARCHAR(3000)         NOT  ,
    blogcite      VARCHAR(1000)         NOT  ,
    email         VARCHAR(255)          NULL,
    state         VARCHAR(255)          NULL,
    word_count    INT                   NULL,
    duration_goal INT                   NULL,
    category_id   BIGINT                NULL,
    user_userid   BIGINT				NULL,
    CONSTRAINT pk_post_entity PRIMARY KEY (id),
    CONSTRAINT unique_id UNIQUE (id),
    CONSTRAINT fk_post_entity_on_user FOREIGN KEY (user_userid) REFERENCES dailytech.users(userid),
    CONSTRAINT fk_post_entity_on_category FOREIGN KEY (category_id) REFERENCES dailytech.categories (id)
);

CREATE TABLE  IF NOT EXISTS  dailytech.comments
(
    id      BIGINT AUTO_INCREMENT NOT NULL,
    name    VARCHAR(255)          NULL,
    email   VARCHAR(255)          NULL,
    body    TEXT                  NULL,
    post_id BIGINT                NOT NULL,
    CONSTRAINT pk_comments PRIMARY KEY (id),
    CONSTRAINT fk_comments_on_post FOREIGN KEY (post_id) REFERENCES dailytech.post_entity (id)
);

-- WEBLINKS
-- Minimal table for bookmarking arbitrary links that inherit from Bookmark.
CREATE TABLE IF NOT EXISTS dailytech.weblinks (
  id     BIGINT AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  profile_url VARCHAR(1000) NULL,
  url VARCHAR(1000) NOT NULL,
  host VARCHAR(255) NULL,
  htmlpage LONGTEXT NULL,
  downloadstatus VARCHAR(32) NOT NULL DEFAULT 'NOT_ATTEMPTED',
  post_id BIGINT NULL,
  CONSTRAINT pk_weblinks PRIMARY KEY (id),
  CONSTRAINT fk_weblinks_on_post FOREIGN KEY (post_id) REFERENCES dailytech.post_entity (id)
) ;


CREATE TABLE  IF NOT EXISTS  dailytech.news
(
    id          BIGINT AUTO_INCREMENT NOT NULL,
    title       VARCHAR(255)          NULL,
    url         VARCHAR(255)          NULL,
    category_id BIGINT                NULL,
    CONSTRAINT pk_news PRIMARY KEY (id),
    CONSTRAINT fk_news_on_category FOREIGN KEY (category_id) REFERENCES dailytech.categories (id)
);

CREATE INDEX idx_post_entity_category_id ON dailytech.post_entity (category_id);
CREATE INDEX idx_post_entity_user_userid ON dailytech.post_entity (user_userid);
CREATE INDEX idx_comments_post_id ON dailytech.comments (post_id);
CREATE INDEX idx_news_category_id ON dailytech.news (category_id);
CREATE INDEX idx_users_roles_role_id ON dailytech.users_roles (role_id);
CREATE INDEX idx_users_roles_user_id ON dailytech.users_roles (user_id);