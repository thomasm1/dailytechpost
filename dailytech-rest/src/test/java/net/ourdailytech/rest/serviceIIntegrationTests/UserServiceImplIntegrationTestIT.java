package net.ourdailytech.rest.serviceIIntegrationTests;

import net.ourdailytech.rest.models.dto.UserDto;
import net.ourdailytech.rest.repositories.RoleRepository;
import net.ourdailytech.rest.service.UsersService;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
public class UserServiceImplIntegrationTestIT {

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	UsersService usersService;

	private UserDto u;
	private String dynamicUsername;
	private String dynamicString;

	@BeforeEach
	public void setup() {
		dynamicUsername = Integer.toString((int) Math.floor((Math.random() * 31)));
		dynamicString = "user" + dynamicUsername + "@cryptomaven.xyz";
		u = UserDto.builder()
				.userId(Integer.parseInt(dynamicUsername))
				.username(dynamicString)
				.lastName("Smith")
				.firstName("Tom")
				.userType(3)
				.organizationCode("CD")
				.dashboardCode("dashboardCd")
				.email(dynamicString)
				.cusUrl("http://www.dailytech.net/photoPath")
				.contactType(1)
				.isActive(1)
				.id("id")
				.build();
		System.out.println("setup: " + dynamicUsername);
	}

	@Test
	@Order(1)
	public void add_User() {
		Assertions.assertEquals(usersService.createUser(u).getEmail(), u.getEmail());
		System.out.println("added: " + dynamicUsername);
	}

	@Test
	@Order(2)
	public void delete_user() throws InterruptedException {
		System.out.println(dynamicUsername + " now deleting ; . . . .");
		Thread.sleep(2000);
		Assertions.assertTrue(usersService.deleteUser(u.getEmail()));
		System.out.println("deleted: " + dynamicUsername);
	}
}