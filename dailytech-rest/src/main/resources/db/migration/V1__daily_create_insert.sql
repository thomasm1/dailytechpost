CREATE TABLE dailytech.categories
(
    id            BIGINT AUTO_INCREMENT NOT NULL,
    name          VARCHAR(255)          NULL,
    `description` VARCHAR(255)          NULL,
    CONSTRAINT pk_categories PRIMARY KEY (id)
);

CREATE TABLE dailytech.comments
(
    id      BIGINT AUTO_INCREMENT NOT NULL,
    name    VARCHAR(255)          NULL,
    email   VARCHAR(255)          NULL,
    body    TEXT                  NULL,
    post_id BIGINT                NOT NULL,
    CONSTRAINT pk_comments PRIMARY KEY (id)
);

CREATE TABLE dailytech.news
(
    id          BIGINT AUTO_INCREMENT NOT NULL,
    title       VARCHAR(255)          NULL,
    url         VARCHAR(255)          NULL,
    category_id BIGINT                NULL,
    CONSTRAINT pk_news PRIMARY KEY (id)
);

CREATE TABLE dailytech.post_entity
(
    id            BIGINT AUTO_INCREMENT NOT NULL,
    did           VARCHAR(255)          NOT NULL,
    post_date     VARCHAR(255)          NULL,
    author        VARCHAR(255)          NULL,
    month_order   VARCHAR(255)          NULL,
    cat3          VARCHAR(255)          NULL,
    title         VARCHAR(255)          NOT NULL,
    post          VARCHAR(3000)         NOT NULL,
    blogcite      VARCHAR(1000)         NOT NULL,
    email         VARCHAR(255)          NULL,
    state         VARCHAR(255)          NULL,
    word_count    INT                   NULL,
    duration_goal INT                   NULL,
    category_id   BIGINT                NULL,
    CONSTRAINT pk_post_entity PRIMARY KEY (id)
);

CREATE TABLE dailytech.roles
(
    id   BIGINT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255)          NOT NULL,
    CONSTRAINT pk_roles PRIMARY KEY (id)
);

CREATE TABLE dailytech.users
(
    userid           INT AUTO_INCREMENT NOT NULL,
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
     authprovider VARCHAR(100) NULL,
     authsubject VARCHAR(255) NULL,
    CONSTRAINT pk_users PRIMARY KEY (userid)
);

CREATE TABLE dailytech.users_roles
(
    role_id BIGINT NOT NULL,
    user_id INT    NOT NULL,
    CONSTRAINT pk_users_roles PRIMARY KEY (role_id, user_id)
);

CREATE TABLE IF NOT EXISTS dailytech.user_plan (
  userid BIGINT NOT NULL,
  plan VARCHAR(50) NULL,
  status VARCHAR(50) NULL,
  effective_from DATETIME NULL,
  effective_to DATETIME NULL,
  cancel_at_period_end BIT NULL,
  billing_provider VARCHAR(100) NULL,
  provider_customer_id VARCHAR(255) NULL,
  provider_subscription_id VARCHAR(255) NULL,
  provider_price_id VARCHAR(255) NULL,
  last_event_at DATETIME NULL,
  trial_end DATETIME NULL,
  grace_end DATETIME NULL,
  CONSTRAINT pk_user_plan PRIMARY KEY (userid)
);

ALTER TABLE dailytech.post_entity
    ADD CONSTRAINT uc_8d90691f1af937cce1e76c802 UNIQUE (id);

ALTER TABLE dailytech.roles
    ADD CONSTRAINT uc_roles_name UNIQUE (name);

ALTER TABLE dailytech.comments
    ADD CONSTRAINT FK_COMMENTS_ON_POST FOREIGN KEY (post_id) REFERENCES dailytech.post_entity (id);

ALTER TABLE dailytech.news
    ADD CONSTRAINT FK_NEWS_ON_CATEGORY FOREIGN KEY (category_id) REFERENCES dailytech.categories (id);

ALTER TABLE dailytech.post_entity
    ADD CONSTRAINT FK_POST_ENTITY_ON_CATEGORY FOREIGN KEY (category_id) REFERENCES dailytech.categories (id);

ALTER TABLE dailytech.user_plan
  ADD CONSTRAINT fk_user_plan_user FOREIGN KEY (userid) REFERENCES users (userid);

ALTER TABLE dailytech.users_roles
    ADD CONSTRAINT fk_userol_on_role FOREIGN KEY (role_id) REFERENCES dailytech.roles (id);

ALTER TABLE dailytech.users_roles
    ADD CONSTRAINT fk_userol_on_user FOREIGN KEY (user_id) REFERENCES dailytech.users (userid);



CREATE INDEX idx_post_entity_category_id ON dailytech.post_entity (category_id);
CREATE INDEX idx_post_entity_user_userid ON dailytech.post_entity (user_userid);
CREATE INDEX idx_comments_post_id ON dailytech.comments (post_id);
CREATE INDEX idx_news_category_id ON dailytech.news (category_id);
CREATE INDEX idx_users_roles_role_id ON dailytech.users_roles (role_id);
CREATE INDEX idx_users_roles_user_id ON dailytech.users_roles (user_id);