package net.ourdailytech.rest.webservice.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.ourdailytech.rest.webservice.entities.User;
import net.ourdailytech.rest.webservice.repositories.UserRepository;

import net.ourdailytech.rest.webservice.services.UserService; 

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository ur;
	
	@Override
	public User createUser(User user) {
		return ur.save(user);
	}
 
	@Override
	public User getUserById(Long id) {
		return ur.findById(id).get();
		}

	  
	@Override
	public User getUserByUsername(String username) {
	try {
		return ur.findByUsername(username).get(0); 
	} catch (Exception e) {
	return null;
	}
	}
 
	@Override
	public List<User> getAllUsers() {
		return (List<User>) ur.findAll();
	}
	
	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return (List<User>) ur.findAll();
	}
	
	@Override
	public User updatesUser(User change) {
		return ur.save(change);
	}

	@Override
	public boolean deleteUser(User user) {
		try {
			ur.delete(user);
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			return false;
		}
		return true; 
	}

	@Override
	public User getUserByUsernameAndPassword(String username, String password) {
		return ur.findByUsernameAndPassword(username, password).get(); 
	}
 
}
