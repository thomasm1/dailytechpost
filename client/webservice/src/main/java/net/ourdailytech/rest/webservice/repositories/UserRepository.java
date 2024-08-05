package net.ourdailytech.rest.webservice.repositories;

import java.util.List;

//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import net.ourdailytech.rest.webservice.entities.User;

public interface UserRepository extends CrudRepository<User,Long> {
List<User> findByUsername(String username);

User findById(long id);
	
}
