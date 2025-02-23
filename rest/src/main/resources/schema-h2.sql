-- 02/16/25 12:00:00

CREATE TABLE IF NOT EXISTS categories (
                                          id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                          description VARCHAR(255),
                                          name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS news (
                                    id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                    title VARCHAR(255),
                                    url VARCHAR(255),
                                    category_id BIGINT UNSIGNED,
                                    CONSTRAINT FK_news_category FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS post_entity (
                                           id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                           author VARCHAR(255),
                                           blogcite VARCHAR(1000) NOT NULL,
                                           cat3 VARCHAR(255),
                                           post_date VARCHAR(255), -- Renamed from "date"
                                           did VARCHAR(255) NOT NULL,
                                           duration_goal INT,
                                           month_order VARCHAR(255),
                                           post VARCHAR(3000) NOT NULL,
                                           state VARCHAR(255),
                                           title VARCHAR(255) NOT NULL,
                                           email VARCHAR(255) NOT NULL,
                                           word_count INT,
                                           category_id BIGINT UNSIGNED,
                                           CONSTRAINT FK_post_category FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS comments (
                                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                                        body TEXT NULL,  -- Changed from CLOB to TEXT
                                        email VARCHAR(255),
                                        name VARCHAR(255),
                                        post_id BIGINT NOT NULL,
                                        CONSTRAINT FK_comments_post FOREIGN KEY (post_id) REFERENCES post_entity (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS roles (
                                     id  BIGINT AUTO_INCREMENT PRIMARY KEY,
                                     name VARCHAR(255) NULL
);

CREATE TABLE IF NOT EXISTS users (
                                     userid  BIGINT AUTO_INCREMENT PRIMARY KEY,
                                     contacttype INT,
                                     cusurl VARCHAR(255),
                                     dashboardcode VARCHAR(255),
                                     email VARCHAR(255) NOT NULL,
                                     firstname VARCHAR(255),
                                     isactive INT,
                                     lastname VARCHAR(255),
                                     organizationcode VARCHAR(255),
                                     password VARCHAR(255),
                                     usertype INT,
                                     username VARCHAR(255),
                                     CONSTRAINT unique_email UNIQUE (email) -- Ensuring unique emails
);

CREATE TABLE IF NOT EXISTS users_roles (
                                           user_id  BIGINT NOT NULL,
                                           role_id  BIGINT NOT NULL,
                                           PRIMARY KEY (user_id, role_id),
                                           CONSTRAINT FK_users_roles_user FOREIGN KEY (user_id) REFERENCES users (userid) ON DELETE CASCADE,
                                           CONSTRAINT FK_users_roles_role FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE
);
