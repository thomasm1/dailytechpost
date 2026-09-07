package net.ourdailytech.rest.repositoryTests;

import static org.junit.jupiter.api.Assertions.*;
import java.sql.DriverManager;
import java.util.UUID;
import liquibase.Liquibase;
import liquibase.Contexts;
import liquibase.LabelExpression;
import liquibase.database.DatabaseFactory;
import liquibase.database.jvm.JdbcConnection;
import liquibase.resource.ClassLoaderResourceAccessor;
import org.junit.jupiter.api.Test;

class UserParityMigrationTest {
    @Test
    @org.junit.jupiter.api.condition.EnabledIfSystemProperty(named = "verifyMysqlUserIndex", matches = "true")
    void existingMysqlEmailIndexSkipsCreationWithoutExecutingChanges() throws Exception {
        try (var connection = DriverManager.getConnection(
                System.getProperty("mysqlInspectionUrl"),
                System.getenv("MYSQL_AWS_DB_USERNAME"), System.getenv("MYSQL_AWS_DB_PASSWORD"))) {
            connection.setReadOnly(true);
            var database = DatabaseFactory.getInstance().findCorrectDatabaseImplementation(new JdbcConnection(connection));
            var migration = new Liquibase("db/changelog/changes/007-user-parity.yaml", new ClassLoaderResourceAccessor(), database);
            var changelog = migration.getDatabaseChangeLog();
            var change = changelog.getChangeSets().stream()
                    .filter(item -> item.getId().equals("007-users-email-unique")).findFirst().orElseThrow();
            // A failed precondition with MARK_RAN skips DDL; do not call update against this database.
            assertThrows(liquibase.exception.PreconditionFailedException.class,
                    () -> change.getPreconditions().check(database, changelog, change, null));
        }
    }

    @Test
    void h2SchemaAndSeedDataLoadTogether() throws Exception {
        try (var connection = DriverManager.getConnection("jdbc:h2:mem:" + UUID.randomUUID() + ";MODE=MySQL")) {
            var scripts = new org.springframework.jdbc.datasource.init.ResourceDatabasePopulator(
                    new org.springframework.core.io.ClassPathResource("schema-h2.sql"),
                    new org.springframework.core.io.ClassPathResource("data-h2.sql"));
            scripts.populate(connection);
            var result = connection.createStatement().executeQuery(
                    "SELECT COUNT(*) FROM dailytech.users WHERE password IS NULL AND authsubject IS NULL");
            assertTrue(result.next());
            assertEquals(5, result.getInt(1));
            result = connection.createStatement().executeQuery(
                    "SELECT COUNT(*) FROM dailytech.users_roles ur JOIN dailytech.users u ON u.userid=ur.user_id JOIN dailytech.roles r ON r.id=ur.role_id");
            assertTrue(result.next());
            assertEquals(5, result.getInt(1));
        }
    }

    @Test
    void duplicateEmailsHaltBeforeChangingAccounts() throws Exception {
        try (var connection = DriverManager.getConnection("jdbc:h2:mem:" + UUID.randomUUID() + ";MODE=MySQL")) {
            var sql = connection.createStatement();
            sql.execute("CREATE TABLE users(userid BIGINT PRIMARY KEY, email VARCHAR(255), cusurl VARCHAR(255))");
            sql.execute("INSERT INTO users VALUES(1, 'same@example.com', NULL), (2, 'same@example.com', NULL)");
            var database = DatabaseFactory.getInstance().findCorrectDatabaseImplementation(new JdbcConnection(connection));
            var migration = new Liquibase("db/changelog/changes/007-user-parity.yaml", new ClassLoaderResourceAccessor(), database);
            assertThrows(liquibase.exception.LiquibaseException.class,
                    () -> migration.update(new Contexts(), new LabelExpression()));
            var result = sql.executeQuery("SELECT COUNT(*) FROM users");
            assertTrue(result.next());
            assertEquals(2, result.getInt(1));
        }
    }

    @org.junit.jupiter.params.ParameterizedTest
    @org.junit.jupiter.params.provider.ValueSource(strings = {"", "uk_users_email", "existing_email_unique"})
    void migrationPreservesExistingAccountsAndPlansAndCanRunTwice(String existingConstraint) throws Exception {
        try (var connection = DriverManager.getConnection("jdbc:h2:mem:" + UUID.randomUUID() + ";MODE=MySQL")) {
            var sql = connection.createStatement();
            sql.execute("CREATE TABLE users(userid BIGINT PRIMARY KEY, email VARCHAR(255) NOT NULL, cusurl VARCHAR(255))");
            if (!existingConstraint.isEmpty()) {
                sql.execute("ALTER TABLE users ADD CONSTRAINT " + existingConstraint + " UNIQUE(email)");
            }
            sql.execute("CREATE TABLE roles(id BIGINT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) UNIQUE NOT NULL)");
            sql.execute("CREATE TABLE user_plan(userid BIGINT PRIMARY KEY, plan VARCHAR(50), status VARCHAR(50), version INT, time_created TIMESTAMP, time_updated TIMESTAMP, CONSTRAINT fk_user_plan_user FOREIGN KEY(userid) REFERENCES users(userid))");
            sql.execute("INSERT INTO users VALUES(10, 'admin@example.com', NULL), (11, 'reader@example.com', NULL)");
            sql.execute("INSERT INTO user_plan(userid, plan, status) VALUES(10, 'PREMIUM', 'ACTIVE')");
            var database = DatabaseFactory.getInstance().findCorrectDatabaseImplementation(new JdbcConnection(connection));
            var migration = new Liquibase("db/changelog/changes/007-user-parity.yaml", new ClassLoaderResourceAccessor(), database);
            migration.update(new Contexts(), new LabelExpression());
            migration.update(new Contexts(), new LabelExpression());
            var result = sql.executeQuery("SELECT plan FROM user_plan ORDER BY userid");
            assertTrue(result.next());
            assertEquals("PREMIUM", result.getString(1));
            assertTrue(result.next());
            assertEquals("FREE", result.getString(1));
            assertFalse(result.next());
            assertThrows(java.sql.SQLException.class,
                    () -> sql.execute("INSERT INTO users VALUES(12, 'reader@example.com', NULL)"));
            sql.execute("UPDATE users SET cusurl = '" + "x".repeat(1024) + "' WHERE userid = 11");
            result = sql.executeQuery("SELECT COUNT(*) FROM roles");
            assertTrue(result.next());
            assertEquals(2, result.getInt(1));
        }
    }
}
