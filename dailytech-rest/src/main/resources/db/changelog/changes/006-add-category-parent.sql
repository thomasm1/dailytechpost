--liquibase formatted sql

--changeset codex:006-add-category-parent labels:categories runOnChange:false comment:Add parent category support for nested link buckets
--preconditions onFail:MARK_RAN onError:HALT
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM information_schema.columns WHERE table_schema = DATABASE() AND table_name = 'categories' AND column_name = 'parent_id'
ALTER TABLE categories
    ADD COLUMN parent_id BIGINT NULL;

ALTER TABLE categories
    ADD CONSTRAINT fk_categories_on_parent FOREIGN KEY (parent_id) REFERENCES categories (id);

CREATE INDEX idx_categories_parent_id ON categories (parent_id);

--rollback DROP INDEX idx_categories_parent_id ON categories;
--rollback ALTER TABLE categories DROP FOREIGN KEY fk_categories_on_parent;
--rollback ALTER TABLE categories DROP COLUMN parent_id;

--changeset codex:007-seed-developer-child-categories labels:categories runOnChange:false comment:Seed Developer child category under each writing category
--preconditions onFail:MARK_RAN onError:HALT
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM categories WHERE id IN (1001, 1101, 1201, 1301, 1401)
INSERT INTO categories (id, name, description, parent_id, version, time_created, time_updated)
VALUES
    (1001, 'Developer', 'Developer resources for A.I.Now.', 10, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1101, 'Developer', 'Developer resources for Web Dev Affairs', 11, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1201, 'Developer', 'Developer resources for Sociology Tomorrow!', 12, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1301, 'Developer', 'Developer resources for Quantum Data', 13, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1401, 'Developer', 'Developer resources for Musing Blockchain', 14, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

--rollback DELETE FROM categories WHERE id IN (1001, 1101, 1201, 1301, 1401);
