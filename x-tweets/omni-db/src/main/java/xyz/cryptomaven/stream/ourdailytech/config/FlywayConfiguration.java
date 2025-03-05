package xyz.cryptomaven.stream.ourdailytech.config;

import org.flywaydb.core.Flyway;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by jt on 7/1/22.
 */
@Configuration
public class FlywayConfiguration {

    @Bean
    @ConfigurationProperties("spring.user.flyway")
    public DataSourceProperties userFlywayDataSourceProps(){
        return new DataSourceProperties();
    }

    @Bean(initMethod = "migrate")
    public Flyway flywayCard(@Qualifier("userFlywayDataSourceProps")
                             DataSourceProperties userFlywayDataSourceProps){
        return Flyway.configure()
                .dataSource(userFlywayDataSourceProps.getUrl(),
                        userFlywayDataSourceProps.getUsername(),
                        userFlywayDataSourceProps.getPassword())
                .locations("classpath:/db/migration/user")
                .load();
    }

    @Bean
    @ConfigurationProperties("spring.category.flyway")
    public DataSourceProperties categoryFlywayDataSourceProps(){
        return new DataSourceProperties();
    }

    @Bean(initMethod = "migrate")
    public Flyway flywayCategory(@Qualifier("categoryFlywayDataSourceProps")
                                       DataSourceProperties categoryFlywayDataSourceProps){
        return Flyway.configure()
                .dataSource(categoryFlywayDataSourceProps.getUrl(),
                        categoryFlywayDataSourceProps.getUsername(),
                        categoryFlywayDataSourceProps.getPassword())
                .locations("classpath:/db/migration/category")
                .load();
    }

}
