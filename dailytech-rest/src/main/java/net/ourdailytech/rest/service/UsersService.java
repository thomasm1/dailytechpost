package net.ourdailytech.rest.service;

import net.ourdailytech.rest.models.dto.LoginDto;
import net.ourdailytech.rest.models.dto.RegisterDto; 
import net.ourdailytech.rest.models.dto.UserDto;

import java.util.List;
import java.util.Optional;


public interface UsersService {

	UserDto loginUser(String username, String password);

	String login(LoginDto loginDto);
	public UserDto createUser(UserDto user);
	Optional<UserDto> register(RegisterDto registerDto);
	public Optional<UserDto>  getUser(long id);
	Optional<UserDto> getUserByEmail(String email);

	public List<UserDto> getUsers();


//	UserDto getUserByEmailAndPassword(String email, String pw);

	public Optional<UserDto> updateUser(UserDto change, long l);
	Optional<UserDto> patchUser(  UserDto user, Long userId);

	public boolean deleteUser(Long userId);
	public boolean deleteUser(UserDto user);
}
