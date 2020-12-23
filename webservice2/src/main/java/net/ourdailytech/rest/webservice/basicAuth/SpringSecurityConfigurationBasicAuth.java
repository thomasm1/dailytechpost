//package net.ourdailytech.rest.webservice.basicAuth;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//@Configuration
//@EnableWebSecurity
//public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter {
//	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		
////		logger.debug("Using default configure(HttpSecurity). If subclassed this will potentially override subclass configure(HttpSecurity).");
//		http
//			.csrf().disable()  // DONT WANT CSRF token since will use JWT token
//			.authorizeRequests()
//			.antMatchers(HttpMethod.OPTIONS,"/**").permitAll() // ENABLE OPTIONS Requests without auth 
//				.anyRequest().authenticated()
//				.and()
////			.formLogin().and()   // DONT WANT FORM LOGIN  
//		.httpBasic(); 
//	}
//}
