package xyz.cryptomaven.stream.ourdailytech.config;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Primary;
import xyz.cryptomaven.stream.ourdailytech.models.User;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import xyz.cryptomaven.stream.ourdailytech.models.User;

import javax.sql.DataSource;
import java.util.Properties;

/**
 * Created by jt on 7/1/22.
 */
@EnableJpaRepositories(basePackages = "xyz.cryptomaven.stream.ourdailytech.repositories",
entityManagerFactoryRef = "userEntityManagerFactory", transactionManagerRef = "userTransactionManager")
@Configuration
public class UserDatabaseConfiguration {

    @Bean
    @Primary
    @ConfigurationProperties("spring.user.datasource")
    public DataSourceProperties userDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    @Primary
    @ConfigurationProperties("spring.user.datasource.hikari")
    public DataSource userDataSource(@Qualifier("userDataSourceProperties") DataSourceProperties userDataSourceProperties){
        return userDataSourceProperties.initializeDataSourceBuilder()
                .type(HikariDataSource.class)
                .build();
    }

    @Bean
    @Primary
    public LocalContainerEntityManagerFactoryBean userEntityManagerFactory(
            @Qualifier("userDataSource") DataSource userDataSource,
                    EntityManagerFactoryBuilder builder){

        Properties props = new Properties();
        props.put("hibernate.hbm2ddl.auto", "validate");
        props.put("hibernate.physical_naming_strategy",
                "org.hibernate.boot.model.naming.CamelCaseToUnderscoresNamingStrategy");

        LocalContainerEntityManagerFactoryBean efb =
                builder.dataSource(userDataSource)
                .packages(User.class)
                .persistenceUnit("user")
                .build();

        efb.setJpaProperties(props);

        return efb;
    }

    @Bean
    @Primary
    public PlatformTransactionManager userTransactionManager(
            @Qualifier("userEntityManagerFactory") LocalContainerEntityManagerFactoryBean userEntityManagerFactory){

        return new JpaTransactionManager(userEntityManagerFactory.getObject());
    }
}











