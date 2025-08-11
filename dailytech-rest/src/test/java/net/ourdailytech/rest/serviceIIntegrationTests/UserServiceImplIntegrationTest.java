package net.ourdailytech.rest.serviceIIntegrationTests;


import net.ourdailytech.rest.models.dto.UserDto;
import net.ourdailytech.rest.repositories.RoleRepository;
import net.ourdailytech.rest.service.UsersService;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;


@SpringBootTest
@ComponentScan(basePackages = {  "net.ourdailytech.rest.util.TestDataLoader"})
@TestMethodOrder(OrderAnnotation.class)
public class UserServiceImplIntegrationTest {
	static UserDto u  ;
	static String dynamicUsername;
	static String dynamicString;
	@Autowired
	RoleRepository roleRepository;
	@Autowired
	UsersService usersService;// = new UsersServiceImpl();

	@BeforeAll
	public static void setup() {
 		dynamicUsername = Integer.toString((int) Math.floor((Math.random()*31))); // should constrain this back into String form and unique
		dynamicString = "user" + dynamicUsername + "@cryptomaven.xyz";
		  u =   UserDto.builder()
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
		System.out.println("setup: "+ dynamicUsername);
	}
	@Test
	@Order(1)
	public void add_User() throws InterruptedException {

		Assertions.assertEquals(usersService.createUser(u).getEmail(), u.getEmail());
		System.out.println("added: " + dynamicUsername);
	}
	@Test
	@Order(2)
	public void delete_user() throws InterruptedException {

		System.out.println(		dynamicUsername + " now deleting ; . . . .");
		System.out.println(		"Thread.sleep(2000); . . . .");
		Thread.sleep(2000);
		System.out.println(		"Thread.sleep(1000); . . . .");
        Assertions.assertTrue(usersService.deleteUser(u.getEmail()));
		System.out.println("deleted: " + dynamicUsername);
	}
}
