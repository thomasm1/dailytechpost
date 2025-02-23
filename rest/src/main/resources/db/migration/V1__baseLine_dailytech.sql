ALTER TABLE post_entity
    ADD email VARCHAR(255) NULL;

ALTER TABLE post_entity
    ADD CONSTRAINT uc_8d90691f1af937cce1e76c802 UNIQUE (id);

ALTER TABLE roles
    ADD CONSTRAINT uc_roles_name UNIQUE (name);

ALTER TABLE post_entity
    DROP COLUMN username;

ALTER TABLE roles
    MODIFY name VARCHAR(255) NOT NULL;

ALTER TABLE users_roles
    DROP COLUMN user_id;

ALTER TABLE users_roles
    ADD user_id INT NOT NULL PRIMARY KEY;

ALTER TABLE users_roles
    ADD CONSTRAINT fk_userol_on_user FOREIGN KEY (user_id) REFERENCES users (userid);

ALTER TABLE users
    DROP COLUMN userid;

ALTER TABLE users
    ADD userid INT AUTO_INCREMENT NOT NULL PRIMARY KEY;