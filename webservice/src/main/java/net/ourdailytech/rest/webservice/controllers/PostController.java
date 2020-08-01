package net.ourdailytech.rest.webservice.controllers;
 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import net.ourdailytech.rest.webservice.beans.Post;
import net.ourdailytech.rest.webservice.services.PostHardcodedService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class PostController {
	
	@Autowired
	private PostHardcodedService postService;
	
	@GetMapping(path="/dailytech/{username}/posts")
	public List<Post> getAllPosts(@PathVariable String username){
		return postService.findAll(); 
	}
	
	@DeleteMapping(path="/dailytech/{username}/posts/{id}")
	public ResponseEntity<Void> deletePost(
			@PathVariable String username, @PathVariable long id){
		
		Post post = postService.deleteById(id);
		if(post!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	} 
}
