package net.ourdailytech.rest;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = net.ourdailytech.rest.DailyRestApplication.class,
		properties = "spring.sql.init.mode=never")
class RestApplicationTest {

	@Test
	void contextLoads() {
	}

}
