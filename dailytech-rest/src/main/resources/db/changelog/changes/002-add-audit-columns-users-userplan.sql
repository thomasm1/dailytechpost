--liquibase formatted sql

-- ─────────────────────────────────────────────────────────────────────────────
-- Changeset 002 – Add AbstractDomainClass audit columns to the `users` table.
-- Both User and UserPlan extend AbstractDomainClass, so Hibernate expects
-- version / time_created / time_updated on those tables.
-- Precondition: if version column already exists, MARK_RAN (skip silently).
-- ─────────────────────────────────────────────────────────────────────────────
--changeset thomasm1:002 labels:migration comment:Add audit columns (version/time_created/time_updated) to users
--preconditions onFail:MARK_RAN onError:MARK_RAN
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM information_schema.columns WHERE table_schema=DATABASE() AND table_name='users' AND column_name='version'

ALTER TABLE users
    ADD COLUMN version      INT      NOT NULL DEFAULT 1,
    ADD COLUMN time_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN time_updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

--rollback ALTER TABLE users DROP COLUMN version;
--rollback ALTER TABLE users DROP COLUMN time_created;
--rollback ALTER TABLE users DROP COLUMN time_updated;

-- ─────────────────────────────────────────────────────────────────────────────
-- Changeset 003 – Same audit columns for `user_plan`.
-- ─────────────────────────────────────────────────────────────────────────────
--changeset thomasm1:003 labels:migration comment:Add audit columns (version/time_created/time_updated) to user_plan
--preconditions onFail:MARK_RAN onError:MARK_RAN
--precondition-sql-check expectedResult:0 SELECT COUNT(*) FROM information_schema.columns WHERE table_schema=DATABASE() AND table_name='user_plan' AND column_name='version'

ALTER TABLE user_plan
    ADD COLUMN version      INT      NOT NULL DEFAULT 1,
    ADD COLUMN time_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN time_updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

--rollback ALTER TABLE user_plan DROP COLUMN version;
--rollback ALTER TABLE user_plan DROP COLUMN time_created;
--rollback ALTER TABLE user_plan DROP COLUMN time_updated;

