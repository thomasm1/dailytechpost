package net.ourdailytech.rest.webservice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner; 
import net.ourdailytech.rest.webservice.entities.User;
import net.ourdailytech.rest.webservice.services.UserDaoService;

public class UserDAOServiceCommandLineRunner implements CommandLineRunner  {
	
	private static final Logger log = 
			LoggerFactory.getLogger(UserCommandLineRunner.class);
	
	@Autowired
	private UserDaoService userDaoService;
	
	@Override
	public void run(String... args) throws Exception {
		User user = new User("User0", "Admin0");
		long insert = userDaoService.insert(user);
		log.info("new User is created : "+ user);
	}

}
