//package net.ourdailytech.rest.webservice;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import net.ourdailytech.rest.webservice.entities.User;
//import net.ourdailytech.rest.webservice.repositories.UserRepository;
//
//@Component
//public class UserCommandLineRunner implements CommandLineRunner {
//
//	private static final Logger log = 
//			LoggerFactory.getLogger(UserCommandLineRunner.class);
//	
//	@Autowired
//	private UserRepository userRepository;
//	
//	@Override
//	public void run(String...arg0) throws Exception {
//		User user = new User("User1", "Admin1");
//		userRepository.save(user);
//		log.info("New User created .." + user);
//		
//		User userWithIdOne = userRepository.findById(1L);
//		log.info("New User created .." + userWithIdOne);
//		
//		List<User> users = (List<User>) userRepository.findAll();
//		log.info("New User created .." + users);
//		
//	}
//}
