package net.ourdailytech.rest.webservice.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.ourdailytech.rest.webservice.entities.PostEntity;

@Repository
public interface PostRepository extends JpaRepository<PostEntity, Long> {
	List<PostEntity> findByUsername(String username);
	
}
