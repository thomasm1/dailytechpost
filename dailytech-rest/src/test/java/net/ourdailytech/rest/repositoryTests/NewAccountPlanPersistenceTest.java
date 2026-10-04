package net.ourdailytech.rest.repositoryTests;

import static org.junit.jupiter.api.Assertions.*;
import net.ourdailytech.rest.models.User;
import net.ourdailytech.rest.models.UserPlanPolicy;
import net.ourdailytech.rest.repositories.UsersRepository;
import net.ourdailytech.rest.util.enums.Plan;
import org.junit.jupiter.api.Test;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.transaction.annotation.EnableTransactionManagement;

class NewAccountPlanPersistenceTest {
    @Configuration
    @ImportAutoConfiguration({DataSourceAutoConfiguration.class, HibernateJpaAutoConfiguration.class})
    @EntityScan(basePackageClasses = User.class)
    @EnableJpaRepositories(basePackageClasses = UsersRepository.class)
    @EnableTransactionManagement
    static class Config {}

    @Test void registrationPlanPersistsWithGeneratedOwnerIdAndSurvivesReload() {
        try (var context = new AnnotationConfigApplicationContext()) {
            context.getEnvironment().getPropertySources().addFirst(new org.springframework.core.env.MapPropertySource("isolated-account-test", java.util.Map.of(
                    "spring.datasource.url", "jdbc:h2:mem:" + java.util.UUID.randomUUID() + ";MODE=MySQL;DB_CLOSE_DELAY=-1",
                    "spring.datasource.driver-class-name", "org.h2.Driver",
                    "spring.datasource.username", "sa", "spring.datasource.password", "",
                    "spring.jpa.hibernate.ddl-auto", "create-drop")));
            context.register(Config.class); context.refresh();
            var users = context.getBean(UsersRepository.class);
            var tx = new TransactionTemplate(context.getBean(PlatformTransactionManager.class));
            Long id = tx.execute(status -> {
                User user = new User(); user.setEmail("new-account@example.com"); user.setPassword("test-hash"); user.setIsActive(1);
                UserPlanPolicy.initializeFreePlan(user);
                return users.saveAndFlush(user).getUserId();
            });
            tx.executeWithoutResult(status -> {
                var account = users.findById(id).orElseThrow();
                assertNotNull(account.getUserPlan());
                assertEquals(id, account.getUserPlan().getUserId());
                assertEquals(Plan.FREE, account.getUserPlan().getPlan());
                assertEquals(Plan.FREE, UserPlanPolicy.currentPlan(account.getUserPlan()));
                assertEquals(account, account.getUserPlan().getUser());
            });
        }
    }
}
