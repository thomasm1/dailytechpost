package net.ourdailytech.rest.webservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

 
import net.ourdailytech.rest.webservice.entities.User;
import net.ourdailytech.rest.webservice.services.UserService;

@RequestMapping(path = "/api")
@CrossOrigin(origins="*") 
@RestController
public class UserController {

	@Autowired
	UserService us;

	@RequestMapping(value = "/dailytech/user", method = RequestMethod.POST, consumes = "application/json") 
	public User createUser(@RequestBody User user) {
		return us.createUser(user);
	}
	
	

	
}
