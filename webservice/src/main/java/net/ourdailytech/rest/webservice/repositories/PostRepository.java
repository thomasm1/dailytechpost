package net.ourdailytech.rest.webservice.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.ourdailytech.rest.webservice.beans.PostJpa;

@Repository
public interface PostRepository extends JpaRepository<PostJpa, Long> {
	List<PostJpa> findByUsername(String username);
	
}
