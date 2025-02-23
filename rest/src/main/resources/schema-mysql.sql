-- 02/16/25 12:00:00

create table if not exists dailytech.categories
(
    id          bigint auto_increment
        primary key,
    description varchar(255) null,
    name        varchar(255) null
) ENGINE=InnoDB;

create table if not exists dailytech.news
(
    id          bigint auto_increment
        primary key,
    title       varchar(255) null,
    url         varchar(255) null,
    category_id bigint       null,
    constraint FK_news_category
        foreign key (category_id) references dailytech.categories (id)
            on delete set null
) ENGINE=InnoDB;

create table if not exists dailytech.post_entity
(
    id            bigint auto_increment
        primary key,
    author        varchar(255)  null,
    blogcite      va

        rchar(1000) not null,
    cat3          varchar(255)  null,
    post_date     varchar(255)  null,
    did           varchar(255)  not null,
    duration_goal int           null,
    month_order   varchar(255)  null,
    post          varchar(3000) not null,
    state         varchar(255)  null,
    title         varchar(255)  not null,
    email      varchar(255)  not null,
    word_count    int           null,
    category_id   bigint        null,
    constraint FK_post_category
        foreign key (category_id) references dailytech.categories (id)
            on delete set null
) ENGINE=InnoDB;

create table if not exists dailytech.comments
(
    id      bigint auto_increment
        primary key,
    body    text         null,
    email   varchar(255) null,
    name    varchar(255) null,
    post_id bigint       not null,
    constraint FK_comments_post
        foreign key (post_id) references dailytech.post_entity (id)
            on delete cascade
) ENGINE=InnoDB;

create table if not exists dailytech.roles
(
    id   bigint auto_increment
        primary key,
    name varchar(255) null
) ENGINE=InnoDB;

create table if not exists dailytech.users
(
    userid           bigint auto_increment
        primary key,
    contacttype      int          null,
    cusurl           varchar(255) null,
    dashboardcode    varchar(255) null,
    email            varchar(255) not null,
    firstname        varchar(255) null,
    isactive         int          null,
    lastname         varchar(255) null,
    organizationcode varchar(255) null,
    password         varchar(255) null,
    usertype         int          null,
    username         varchar(255) null,
    constraint unique_email
        unique (email)
) ENGINE=InnoDB;

create table if not exists dailytech.users_roles
(
    user_id bigint not null,
    role_id bigint not null,
    primary key (user_id, role_id),
    constraint FK_users_roles_role
        foreign key (role_id) references dailytech.roles (id)
            on delete cascade,
    constraint FK_users_roles_user
        foreign key (user_id) references dailytech.users (userid)
            on delete cascade
) ENGINE=InnoDB;

