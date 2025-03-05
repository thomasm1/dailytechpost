package xyz.cryptomaven.stream.ourdailytech.config;

import com.zaxxer.hikari.HikariDataSource;
import xyz.cryptomaven.stream.ourdailytech.models.Category; 
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

import javax.sql.DataSource;
import java.util.Properties;

/**
 * Created by jt on 7/1/22.
 */
@EnableJpaRepositories(basePackages = "xyz.cryptomaven.stream.ourdailytech.repositories",
 entityManagerFactoryRef = "categoryEntityManagerFactory", transactionManagerRef = "categoryTransactionManager")
@Configuration
public class CategoryDatabaseConfiguration {

    @Bean
    @ConfigurationProperties("spring.category.datasource")
    public DataSourceProperties categoryDataSourceProperties(){
        return new DataSourceProperties();
    }

    @Bean
    @ConfigurationProperties("spring.category.datasource.hikari")
    public DataSource categoryDataSource(@Qualifier("categoryDataSourceProperties") DataSourceProperties categoryDataSourceProperties){
        return categoryDataSourceProperties.initializeDataSourceBuilder()
                .type(HikariDataSource.class)
                .build();
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean categoryEntityManagerFactory(
            @Qualifier("categoryDataSource") DataSource categoryDataSource,
            EntityManagerFactoryBuilder builder){

        Properties props = new Properties();
        props.put("hibernate.hbm2ddl.auto", "validate");
        props.put("hibernate.physical_naming_strategy",
                "org.hibernate.boot.model.naming.CamelCaseToUnderscoresNamingStrategy");

        LocalContainerEntityManagerFactoryBean efb =  builder.dataSource(categoryDataSource)
                .packages(Category.class)
                .persistenceUnit("category")
                .build();

        efb.setJpaProperties(props);

        return efb;
    }

    @Bean
    public PlatformTransactionManager categoryTransactionManager(
            @Qualifier("categoryEntityManagerFactory") LocalContainerEntityManagerFactoryBean categoryEntityManagerFactory){

        return new JpaTransactionManager(categoryEntityManagerFactory.getObject());
    }
}









