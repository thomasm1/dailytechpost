-- Enable MySQL mode for H2
SET MODE MySQL;


-- Insert into users
INSERT INTO users (userid, contacttype, cusurl, dashboardcode, email, firstname, isactive, lastname, organizationcode, password, usertype, username)
VALUES
    (11, 1, 'https://example.com/user1', 'DASH001', 'admin@example.com', 'Admin', 1, 'User', 'ORG001', 'securepassword', 1, 'admin@example.com'),
    (12, 2, 'https://example.com/user2', 'DASH002', 'user@example.com', 'Regular', 1, 'User', 'ORG002', 'password123', 2, 'user@example.com');

COMMIT;
INSERT INTO roles (id, name)
VALUES
    (1, 'ADMIN'),
    (2, 'USER');


INSERT INTO users_roles (role_id, user_id)
VALUES (1, 11),
       (2, 12);

INSERT INTO categories (id, description, name)
VALUES
    (11, 'Technology news', 'Tech'),
    (12, 'Health and wellness', 'Health'),
    (13, 'Sports updates', 'Sports');

INSERT INTO news (id, title, url, category_id)
VALUES
    (11, 'AI Breakthrough', 'https://example.com/ai-news', 11),
    (12, 'New Vaccine Updates', 'https://example.com/health-news', 12),
    (13, 'Championship Results', 'https://example.com/sports-news', 13);

INSERT INTO post_entity (id, author, blogcite, cat3, post_date, did, duration_goal, month_order, post, state, title, username, word_count, category_id)
VALUES
    (11, 'John Doe', 'https://example.com/blog1', 'Tech', '2024-12-04', 'D123', 10, 'December', 'Exciting AI advancements', 'Published', 'AI in 2024', 'johndoe', 500, 11),
    (12, 'Jane Smith', 'https://example.com/blog2', 'Health', '2024-12-04', 'D124', 8, 'December', 'The latest health trends', 'Draft', 'Health Updates', 'janesmith', 700, 12);

INSERT INTO comments (id, body, email, name, post_id)
VALUES
    (11, 'Great insights!', 'user1@example.com', 'Alice', 11),
    (12, 'Very informative.', 'user2@example.com', 'Bob', 12);

