//package net.ourdailytech.rest.webservice.basicAuth;
//
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//@RequestMapping(path = "/api")
//@CrossOrigin(origins="*")
//@RestController
//public class BasicAuthBeanController {
//
//	@RequestMapping(method=RequestMethod.GET, path="/") 
//	public String landing() {
//		return "Daily Tech Landing";
//	}
//
//	
//	@GetMapping(path="/dailytech") 
//	public BasicAuthBean BasicAuthBean() { 
//		 return new BasicAuthBean("Daily Tech Blog");
//	}
//	
//	@GetMapping(path="/dailytech/error") 
//	public BasicAuthBean errorPage() {
//		throw new RuntimeException("OOps! An error has occured"); 
//	}
//	
////	// AUTHENTICATION BEAN
////	@GetMapping(path="/dailytech/user") 
////	public BasicAuthBean dailyTechEntityUser() { 
////		 return new BasicAuthBean("You have successfully logged into /api/dailytech/login");
////	}
////
////	@GetMapping(path="/api/dailytech/login")
////	@CrossOrigin(origins = "*")
////	public BasicAuthBean dailyTechEntityLogin() { 
////		 return new BasicAuthBean("You have successfully logged into /api/dailytech/login");
////	}
//	// DAILYTECH BEAN
//	@GetMapping(path="/dailytech/user/{name}") 
//	public BasicAuthBean dailyTechUser(@PathVariable String name) { 
//		return new BasicAuthBean(String.format("Daily Post Author: %s", name));
//	}
//	
//}
