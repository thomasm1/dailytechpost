package net.ourdailytech.rest.webservice.services;

import java.util.List; 

import net.ourdailytech.rest.webservice.entities.User;

public interface UserService {
	public User createUser(User user);
	public User getUserById(Long id);   
	
	public List<User> getAllUsers();
	public List<User> findAll();
	public User updatesUser(User change);
	public boolean deleteUser(User user);

	public User getUserByUsernameAndPassword(String username, String password);
	public User getUserByUsername(String username);
}
