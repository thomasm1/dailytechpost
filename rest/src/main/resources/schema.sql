
create table if not exists categories_seq
(
    next_val bigint null
);

create table if not exists comments_seq
(
    next_val bigint null
);
create table if not exists news_seq
(
    next_val bigint null
);

create table if not exists users_seq
(
    next_val bigint null
);

create table if not exists categories
(
    id          bigint       not null
        primary key,
    description varchar(255) null,
    name        varchar(255) null
);

create table if not exists news
(
    id          bigint       not null
        primary key,
    title       varchar(255) null,
    url         varchar(255) null,
    category_id bigint       null,
    constraint FK6itmfjj4ma8lfpj10jx24mhvx
        foreign key (category_id) references categories (id)
);

create table if not exists post_entity
(
    id            bigint        not null
        primary key,
    author        varchar(255)  null,
    blogcite      varchar(1000) not null,
    cat3          varchar(255)  null,
    `date`         varchar(255)  null,
    did           varchar(255)  not null,
    duration_goal int           null,
    month_order   varchar(255)  null,
    post          varchar(3000) not null,
    state         varchar(255)  null,
    title         varchar(255)  not null,
    username      varchar(255)  not null,
    word_count    int           null,
    category_id   bigint        null,
    constraint FK4t1cjd0iqkq9g91s6c5cf83yi
        foreign key (category_id) references categories (id)
);

create table if not exists comments
(
    id      bigint       not null
        primary key,
    body    text         null,
    email   varchar(255) null,
    name    varchar(255) null,
    post_id bigint       not null,
    constraint FKp83v7smymcwnon8sgslhar0e8
        foreign key (post_id) references post_entity (id)
);

create table if not exists post_entity_seq
(
    next_val bigint null
);

create table if not exists roles
(
    id   int auto_increment
        primary key,
    name varchar(255) null
)
    auto_increment = 3;


create table if not exists users
(
    userid           int          not null
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
    username         varchar(255) null
);

create table if not exists USERS_ROLES
(
    user_id int not null,
    role_id int not null,
    primary key (user_id, role_id),
    constraint FKforUsersRoles_user_id
        foreign key (user_id) references users (userid),
    constraint FKforUsersRoles_role_id
        foreign key (role_id) references roles (id)
);
