package net.ourdailytech.rest;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@ActiveProfiles("h2")
@SpringBootTest(classes = net.ourdailytech.rest.DailyRestApplication.class)
class RestApplicationTest {

	@Test
	void contextLoads() {
	}

}
