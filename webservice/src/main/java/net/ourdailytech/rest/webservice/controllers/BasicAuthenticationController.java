package net.ourdailytech.rest.webservice.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import net.ourdailytech.rest.webservice.beans.AuthenticationBean;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {

	@GetMapping(path="/api/dailytech/login")
	public AuthenticationBean dailyTechEntityLogin() { 
		 return new AuthenticationBean("You have successfully logged into /api/dailytech/login");
	}
	
	@GetMapping(path="/dailytech/login")
	public AuthenticationBean dailyTechLogin() { 
		 return new AuthenticationBean("You have successfully logged into /dailytech/login");
	}
}
