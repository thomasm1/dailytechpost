-- H2 test schema aligned with Liquibase changesets 001 + 002.
-- Note: ON UPDATE CURRENT_TIMESTAMP is not used for H2.

CREATE SCHEMA IF NOT EXISTS dailytech;

CREATE TABLE IF NOT EXISTS dailytech.roles
(
    id   BIGINT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255)          NOT NULL,
    CONSTRAINT pk_roles PRIMARY KEY (id),
    CONSTRAINT uc_roles_name UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS dailytech.users
(
    userid           BIGINT AUTO_INCREMENT NOT NULL,
    password         VARCHAR(255) NULL,
    lastname         VARCHAR(255) NULL,
    firstname        VARCHAR(255) NULL,
    usertype         INT          NULL,
    email            VARCHAR(255) NOT NULL,
    organizationcode VARCHAR(255) NULL,
    cusurl           VARCHAR(255) NULL,
    dashboardcode    VARCHAR(255) NULL,
    isactive         INT          NULL,
    contacttype      INT          NULL,
    authprovider     VARCHAR(100) NULL,
    authsubject      VARCHAR(255) NULL,
    version          INT          NOT NULL DEFAULT 1,
    time_created     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    time_updated     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_users PRIMARY KEY (userid)
);

CREATE TABLE IF NOT EXISTS dailytech.users_roles
(
    role_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    CONSTRAINT pk_users_roles PRIMARY KEY (role_id, user_id),
    CONSTRAINT fk_userol_on_role FOREIGN KEY (role_id) REFERENCES dailytech.roles (id),
    CONSTRAINT fk_userol_on_user FOREIGN KEY (user_id) REFERENCES dailytech.users (userid)
);

CREATE TABLE IF NOT EXISTS dailytech.user_plan
(
    userid                   BIGINT       NOT NULL,
    plan                     VARCHAR(50)  NULL,
    status                   VARCHAR(50)  NULL,
    effective_from           DATETIME     NULL,
    effective_to             DATETIME     NULL,
    cancel_at_period_end     BOOLEAN      NULL,
    billing_provider         VARCHAR(100) NULL,
    provider_customer_id     VARCHAR(255) NULL,
    provider_subscription_id VARCHAR(255) NULL,
    provider_price_id        VARCHAR(255) NULL,
    last_event_at            DATETIME     NULL,
    trial_end                DATETIME     NULL,
    grace_end                DATETIME     NULL,
    version                  INT          NOT NULL DEFAULT 1,
    time_created             DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    time_updated             DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_user_plan PRIMARY KEY (userid),
    CONSTRAINT fk_user_plan_user FOREIGN KEY (userid) REFERENCES dailytech.users (userid)
);

CREATE TABLE IF NOT EXISTS dailytech.categories
(
    id           BIGINT AUTO_INCREMENT NOT NULL,
    name         VARCHAR(255) NULL,
    description  VARCHAR(255) NULL,
    version      INT          DEFAULT 1,
    time_created DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    time_updated DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_categories PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS dailytech.post_entity
(
    id            BIGINT AUTO_INCREMENT NOT NULL,
    did           VARCHAR(255)  NOT NULL,
    post_date     VARCHAR(255)  NULL,
    author        VARCHAR(255)  NULL,
    month_order   VARCHAR(255)  NULL,
    cat3          VARCHAR(255)  NULL,
    title         VARCHAR(255)  NOT NULL,
    post          VARCHAR(3000) NOT NULL,
    blogcite      VARCHAR(1000) NOT NULL,
    email         VARCHAR(255)  NULL,
    state         VARCHAR(255)  NULL,
    word_count    INT           NULL,
    duration_goal INT           NULL,
    category_id   BIGINT        NULL,
    user_userid   BIGINT        NULL,
    version       INT           DEFAULT 1,
    time_created  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    time_updated  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_post_entity PRIMARY KEY (id),
    CONSTRAINT unique_post_did UNIQUE (did),
    CONSTRAINT fk_post_entity_on_user FOREIGN KEY (user_userid) REFERENCES dailytech.users (userid),
    CONSTRAINT fk_post_entity_on_category FOREIGN KEY (category_id) REFERENCES dailytech.categories (id)
);

CREATE TABLE IF NOT EXISTS dailytech.comments
(
    id           BIGINT AUTO_INCREMENT NOT NULL,
    name         VARCHAR(255) NULL,
    email        VARCHAR(255) NULL,
    body         TEXT         NULL,
    post_id      BIGINT       NOT NULL,
    version      INT          DEFAULT 1,
    time_created DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    time_updated DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_comments PRIMARY KEY (id),
    CONSTRAINT fk_comments_on_post FOREIGN KEY (post_id) REFERENCES dailytech.post_entity (id)
);

CREATE TABLE IF NOT EXISTS dailytech.weblinks
(
    id             BIGINT AUTO_INCREMENT NOT NULL,
    title          VARCHAR(255)  NOT NULL,
    profile_url    VARCHAR(1000) NULL,
    url            VARCHAR(1000) NOT NULL,
    host           VARCHAR(255)  NULL,
    htmlpage       CLOB          NULL,
    downloadstatus VARCHAR(32)   NOT NULL DEFAULT 'NOT_ATTEMPTED',
    post_id        BIGINT        NULL,
    version        INT           DEFAULT 1,
    time_created   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    time_updated   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_weblinks PRIMARY KEY (id),
    CONSTRAINT fk_weblinks_on_post FOREIGN KEY (post_id) REFERENCES dailytech.post_entity (id)
);

CREATE TABLE IF NOT EXISTS dailytech.news
(
    id           BIGINT AUTO_INCREMENT NOT NULL,
    title        VARCHAR(255) NULL,
    url          VARCHAR(255) NULL,
    public_link  BOOLEAN      NOT NULL DEFAULT TRUE,
    category_id  BIGINT       NULL,
    version      INT          DEFAULT 1,
    time_created DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    time_updated DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_news PRIMARY KEY (id),
    CONSTRAINT fk_news_on_category FOREIGN KEY (category_id) REFERENCES dailytech.categories (id)
);
