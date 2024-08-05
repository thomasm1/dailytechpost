package net.ourdailytech.rest.webservice.controllers;
 
import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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
	
	@GetMapping(path="/dailytech/{username}/posts/{id}")
	public Post getPost(@PathVariable String username, @PathVariable long id){
		return postService.findById(id); 
	}
	
	@PutMapping(path="/dailytech/{username}/posts/{id}")
	public ResponseEntity<Post> updatePost(
			@PathVariable String username, 
			@PathVariable long id, @RequestBody Post post){
		 Post postUpdated = postService.save(post); 
		 return new ResponseEntity<Post>(post, HttpStatus.OK);
	}
	
	@PostMapping(path="/dailytech/{username}/posts")
	public ResponseEntity<Void> createPost(
			@PathVariable String username, 
		    @RequestBody Post post
			){
		 Post postCreated = postService.save(post); 
		
		 URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				 .path("/{id}").buildAndExpand(postCreated.getId()).toUri();
		 
		 return ResponseEntity.created(uri).build();
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
