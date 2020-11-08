package net.ourdailytech.rest.webservice.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
 
import net.ourdailytech.rest.webservice.beans.DailyTechBean;

@CrossOrigin(origins="*")
@RestController
public class DailyController {
 
	@RequestMapping(method=RequestMethod.GET, path = "/")
	public String landing() {
		return "Daily Tech Landing";
	}
	
	@GetMapping(path="/dailytech")
	public DailyTechBean dailyTechBean() { 
		 return new DailyTechBean("Daily Tech Blog");
	}
	
	@GetMapping(path="/dailytech/error")
	public DailyTechBean errorPage() {
		throw new RuntimeException("OOps! An error has occured"); 
	}
	
	@GetMapping(path="/dailytech/user/{name}")
	public DailyTechBean dailyTechUser(@PathVariable String name) { 
		return new DailyTechBean(String.format("Daily Post Author: %s", name));
	}
}
