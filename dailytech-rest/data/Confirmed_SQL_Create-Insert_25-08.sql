DROP SCHEMA dailytech;

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
    title         VARCHAR(255)          NOT NULL,
    post          VARCHAR(3000)         NOT NULL,
    blogcite      VARCHAR(1000)         NOT NULL,
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

CREATE TABLE  IF NOT EXISTS  dailytech.news
(
    id          BIGINT AUTO_INCREMENT NOT NULL,
    title       VARCHAR(255)          NULL,
    url         VARCHAR(255)          NULL,
    category_id BIGINT                NULL,
    CONSTRAINT pk_news PRIMARY KEY (id),
    CONSTRAINT fk_news_on_category FOREIGN KEY (category_id) REFERENCES dailytech.categories (id)
);


-- BOOKS
-- persist  as `title` and `profile_url` here.
-- CREATE TABLE IF NOT EXISTS dailytech.books (
--   id           BIGINT NOT NULL AUTO_INCREMENT,
--   title        VARCHAR(255)  NOT NULL,
--   profile_url  VARCHAR(1000),
--   pubyear      INT,
--   publisher    VARCHAR(255),
--   authors      VARCHAR(500),
--   genre        VARCHAR(255),
--   rating       DOUBLE,
--   CONSTRAINT pk_books PRIMARY KEY (id)
-- ) ;
DROP TABLE dailytech.weblinks;
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


CREATE INDEX idx_post_entity_category_id ON dailytech.post_entity (category_id);
CREATE INDEX idx_post_entity_user_userid ON dailytech.post_entity (user_userid);
CREATE INDEX idx_comments_post_id ON dailytech.comments (post_id);
CREATE INDEX idx_news_category_id ON dailytech.news (category_id);
CREATE INDEX idx_users_roles_role_id ON dailytech.users_roles (role_id);
CREATE INDEX idx_users_roles_user_id ON dailytech.users_roles (user_id);




-- COMMANDS 1----------------------------------
SELECT * FROM dailytech.post_entity;
SELECT * FROM dailytech.users;
SELECT * FROM dailytech.users_roles;
SELECT * FROM dailytech.categories;
SELECT * FROM dailytech.comments;
SELECT * FROM dailytech.weblinks;
SELECT * FROM dailytech.news;

-- END COMMANDS ----------------------------------








-- ROLES: 2 entries
INSERT INTO dailytech.roles (id, name)
VALUES
    (1, 'ROLE_ADMIN'),
    (2, 'ROLE_USER');

-- USERS: 5 entries
INSERT INTO dailytech.users (
    userid, username, password, lastname, firstname,
    usertype, email, organizationcode, cusurl,
    dashboardcode, isactive, contacttype
)
VALUES
    (101, 'tomAdmin', 'pass123', 'Smith', 'TomA', 0, 'tom.admin@example.com', 'ORG-A', 'https://example.com/tomA', 'DASH-A', 1, 111),
    (102, 'janeUser', 'pass234', 'Doe', 'Jane', 1, 'jane.user@example.com', 'ORG-B', 'https://example.com/jane', 'DASH-B', 1, 222),
    (103, 'bobUser', 'pass345', 'Brown', 'Bob', 2, 'bob.user@example.com', 'ORG-C', 'https://example.com/bob', 'DASH-C', 0, 333),
    (104, 'aliceUser', 'pass456', 'Johnson', 'Alice', 3, 'alice.user@example.com', 'ORG-D', 'https://example.com/alice', 'DASH-D', 1, 444),
    (105, 'thomasMaestas', 'pass567', 'Maestas', 'ThomasM', 3, 'thomas.maestas@example.com', 'ORG-E', 'https://example.com/thomasM', 'DASH-E', 0, 555);

-- USERS_ROLES: 5 entries
INSERT INTO dailytech.users_roles (role_id, user_id)
VALUES
    (1, 101),  -- tomAdmin => ROLE_ADMIN
    (2, 102),  -- janeUser => ROLE_USER
    (2, 103),  -- bobUser => ROLE_USER
    (2, 104),  -- aliceUser => ROLE_USER
    (1, 105);  -- thomasMaestas => ROLE_ADMIN

-- CATEGORIES: 5 entries
INSERT INTO dailytech.categories (id, name, description)
VALUES
    (10, 'Tech', 'Technology news'),
    (11, 'Health', 'Health & Wellness'),
    (12, 'Sports', 'Sports updates'),
    (13, 'Finance', 'Financial news & tips'),
    (14, 'Crypto', 'Cryptocurrency insights');

-- POST_ENTITY: 5 entries
INSERT INTO dailytech.post_entity (
    id, did, post_date, author, month_order, cat3, title,
    post, blogcite, email, state, word_count, duration_goal, category_id
)
VALUES
    (20, 'D1001', '2025-05-01', 'TomA', 'May', 'Blockchain', 'Ethereum Merge',
     'Discussion on Ethereum merge details...', 'https://blogsite1.com', 'tom.admin@example.com',
     'Published', 1500, 10, 14),  -- references categories.id=14 (Crypto)

    (21, 'D1002', '2025-05-02', 'Jane', 'May', 'Wellness', 'Nutrition Tips',
     'Top 10 tips for daily health...', 'https://blogsite2.com', 'jane.user@example.com',
     'Draft', 800, 5, 11),        -- references categories.id=11 (Health)

    (22, 'D1003', '2025-05-03', 'Bob', 'June', 'Sports', 'Championship Recap',
     'Recap of the championship match...', 'https://blogsite3.com', 'bob.user@example.com',
     'Published', 1200, 7, 12),   -- references categories.id=12 (Sports)

    (23, 'D1004', '2025-05-04', 'Alice', 'June', 'Tech', 'AI Breakthrough',
     'New AI breakthrough discovered...', 'https://blogsite4.com', 'alice.user@example.com',
     'Published', 1600, 8, 10),   -- references categories.id=10 (Tech)

    (24, 'D1005', '2025-05-05', 'ThomasM', 'July', 'Finance', 'Stock Market Trends',
     'Analyzing latest stock market trends...', 'https://blogsite5.com', 'thomas.maestas@example.com',
     'Published', 2000, 14, 13);  -- references categories.id=13 (Finance)

-- COMMENTS: 5 entries
INSERT INTO dailytech.comments (
    id, name, email, body, post_id
)
VALUES
    (30, 'Sam Reader', 'sam@example.com', 'Great insights, thanks for sharing!', 20),  -- references post_entity.id=20
    (31, 'HealthGuru', 'guru@example.com', 'Loved the tips!', 21),                     -- references post_entity.id=21
    (32, 'SportFanatic', 'fan@example.com', 'Fantastic recap! Keep it up.', 22),       -- references post_entity.id=22
    (33, 'TechLover', 'techie@example.com', 'Excited about AI updates!', 23),          -- references post_entity.id=23
    (34, 'InvestorJoe', 'joe@example.com', 'Any more stock tips?', 24);                -- references post_entity.id=24

-- Sample data for weblinks (match table: title, profile_url, url, host, htmlpage, downloadstatus)
INSERT INTO dailytech.weblinks
  (title, profile_url, url, host, htmlpage, post_id)
VALUES
  ('Spring Boot Reference',
   'https://docs.spring.io/spring-boot/docs/current/reference/html/',
   'https://docs.spring.io/spring-boot/docs/current/reference/html/',
   'docs.spring.io',
   'htmlpage',
    20),
  ('Angular Docs',
   'https://angular.dev/',
   'https://angular.dev/',
   'angular.dev',
   'htmlpage',
   21),
  ('OWASP Cheat Sheet Series',
   'https://cheatsheetseries.owasp.org/',
   'https://cheatsheetseries.owasp.org/',
   'cheatsheetseries.owasp.org',
   'htmlpage',
   22),
  ('PostgreSQL 16 Manual',
   'https://www.postgresql.org/docs/current/',
   'https://www.postgresql.org/docs/current/',
   'www.postgresql.org',
   'htmlpage',
  23),
  ('Kafka Documentation',
   'https://kafka.apache.org/documentation/',
   'https://kafka.apache.org/documentation/',
   'kafka.apache.org',
   'htmlpage',
   24);

-- NEWS: 5 entries
INSERT INTO dailytech.news (
    id, title, url, category_id
)
VALUES
    (40, 'Crypto Market Surges', 'https://news1.com', 14),  -- references categories.id=14 (Crypto)
    (41, 'Health App Innovations', 'https://news2.com', 11), -- references categories.id=11 (Health)
    (42, 'Tech Giant Merges', 'https://news3.com', 10),      -- references categories.id=10 (Tech)
    (43, 'Local Team Wins', 'https://news4.com', 12),        -- references categories.id=12 (Sports)
    (44, 'Finance Reforms', 'https://news5.com', 13);        -- references categories.id=13 (Finance)



-- COMMANDS 2----------------------------------
SELECT * FROM dailytech.post_entity;
SELECT * FROM dailytech.users;
SELECT * FROM dailytech.users_roles;
SELECT * FROM dailytech.categories;
SELECT * FROM dailytech.comments;
SELECT * FROM dailytech.weblinks;
SELECT * FROM dailytech.news;

-- END COMMANDS ----------------------------------