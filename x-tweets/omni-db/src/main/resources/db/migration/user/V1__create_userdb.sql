CREATE TABLE dailytech.roles
(
    id   BIGINT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255)          NOT NULL,
    CONSTRAINT pk_roles PRIMARY KEY (id)

);

CREATE TABLE dailytech.users
(
    userid           INT AUTO_INCREMENT NOT NULL,
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

CREATE TABLE dailytech.users_roles
(
    role_id BIGINT NOT NULL,
    user_id INT    NOT NULL,
    CONSTRAINT pk_users_roles PRIMARY KEY (role_id, user_id)

);
ALTER TABLE dailytech.roles
    ADD CONSTRAINT uc_roles_name UNIQUE (name ENGINE=InnoDB
        );

ALTER TABLE dailytech.users_roles
    ADD CONSTRAINT fk_userol_on_role FOREIGN KEY (role_id) REFERENCES dailytech.roles (id ENGINE=InnoDB
        );

ALTER TABLE dailytech.users_roles
    ADD CONSTRAINT fk_userol_on_user FOREIGN KEY (user_id) REFERENCES dailytech.users (userid ENGINE=InnoDB
        );