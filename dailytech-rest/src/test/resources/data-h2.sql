
-- ROLES
INSERT INTO dailytech.roles (id, name)
VALUES
    (1, 'ROLE_ADMIN'),
    (2, 'ROLE_USER');

-- USERS
INSERT INTO dailytech.users (
    userid, password, lastname, firstname,
    usertype, email, organizationcode, cusurl,
    dashboardcode, isactive, contacttype, authprovider, authsubject
)
VALUES
    (101, 'pass123', 'Smith', 'TomA', 0, 'tom.admin@example.com', 'ORG-A', 'https://example.com/tomA', 'DASH-A', 1, 111, 'INTERNAL', 'sub-101'),
    (102, 'pass234', 'Doe', 'Jane', 1, 'jane.user@example.com', 'ORG-B', 'https://example.com/jane', 'DASH-B', 1, 222, 'INTERNAL', 'sub-102'),
    (103, 'pass345', 'Brown', 'Bob', 2, 'bob.user@example.com', 'ORG-C', 'https://example.com/bob', 'DASH-C', 0, 333, 'INTERNAL', 'sub-103'),
    (104, 'pass456', 'Johnson', 'Alice', 3, 'alice.user@example.com', 'ORG-D', 'https://example.com/alice', 'DASH-D', 1, 444, 'FIREBASE', 'sub-104'),
    (105, 'pass567', 'Maestas', 'ThomasM', 3, 'thomas.maestas@example.com', 'ORG-E', 'https://example.com/thomasM', 'DASH-E', 0, 555, 'COGNITO', 'sub-105');

-- USERS_ROLES
INSERT INTO dailytech.users_roles (role_id, user_id)
VALUES
    (1, 101),
    (2, 102),
    (2, 103),
    (2, 104),
    (1, 105);

-- USER_PLAN
INSERT INTO dailytech.user_plan (
    userid, plan, status, effective_from, effective_to, cancel_at_period_end,
    billing_provider, provider_customer_id, provider_subscription_id, provider_price_id,
    last_event_at, trial_end, grace_end
)
VALUES
    (101, 'PRO', 'ACTIVE', '2025-01-01 00:00:00', '2025-12-31 23:59:59', FALSE,
     'STRIPE', 'cus_101', 'sub_101', 'price_101',
     '2025-04-01 12:00:00', '2025-01-15 00:00:00', '2025-02-01 00:00:00'),
    (102, 'FREE', 'ACTIVE', '2025-01-01 00:00:00', NULL, FALSE,
     NULL, NULL, NULL, NULL,
     NULL, NULL, NULL);

-- CATEGORIES
INSERT INTO dailytech.categories (id, name, description)
VALUES
    (10, 'A.I.Now.', 'AI Technology news'),
    (11, 'Web Dev Affairs', 'Web-Dev & Coding updates'),
    (12, 'Sociology Tomorrow!', 'Sociology Apps & updates'),
    (13, 'Quantum Data', 'Quantum news & tips'),
    (14, 'Musing Blockchain', 'Blockchain Cryptocurrency insights');

-- POST_ENTITY
INSERT INTO dailytech.post_entity (
    id, did, post_date, author, month_order, cat3, title,
    post, blogcite, email, state, word_count, duration_goal, category_id, user_userid
)
VALUES
    (20, 'D1001', '2025-05-01', 'TomA', 'May', 'Blockchain', 'Ethereum Merge',
     'Discussion on Ethereum merge details...', 'https://blogsite1.com', 'tom.admin@example.com',
     'Published', 1500, 10, 14, 101),
    (21, 'D1002', '2025-05-02', 'Jane', 'May', 'Wellness', 'Nutrition Tips',
     'Top 10 tips for daily health...', 'https://blogsite2.com', 'jane.user@example.com',
     'Draft', 800, 5, 11, 102),
    (22, 'D1003', '2025-05-03', 'Bob', 'June', 'Sports', 'Championship Recap',
     'Recap of the championship match...', 'https://blogsite3.com', 'bob.user@example.com',
     'Published', 1200, 7, 12, 103);

-- COMMENTS
INSERT INTO dailytech.comments (id, name, email, body, post_id)
VALUES
    (30, 'Sam Reader', 'sam@example.com', 'Great insights, thanks for sharing!', 20),
    (31, 'HealthGuru', 'guru@example.com', 'Loved the tips!', 21),
    (32, 'SportFanatic', 'fan@example.com', 'Fantastic recap! Keep it up.', 22);

-- WEBLINKS
INSERT INTO dailytech.weblinks (title, profile_url, url, host, htmlpage, post_id)
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
     21);

-- NEWS
INSERT INTO dailytech.news (id, title, url, category_id)
VALUES
    (40, 'Crypto Market Surges', 'https://news1.com', 14),
    (41, 'Health App Innovations', 'https://news2.com', 11);
