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

import net.ourdailytech.rest.webservice.entities.PostEntity;
import net.ourdailytech.rest.webservice.repositories.PostRepository;
import net.ourdailytech.rest.webservice.services.PostHardcodedService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class PostEntityController {
	
//	@Autowired
//	private PostHardcodedService postService;
	
	@Autowired
	private PostRepository postRepository;
	
	@GetMapping(path="/api/dailytech/{username}/posts")
	public List<PostEntity> getAllPosts(@PathVariable String username){
		return postRepository.findByUsername(username);
		//return postService.findAll(); 
	}
	
	@GetMapping(path="/api/dailytech/{username}/posts/{id}")
	public PostEntity getPost(@PathVariable String username, @PathVariable long id){
		return postRepository.findById(id).get();
		//		return postService.findById(id); 
	}

	@DeleteMapping(path="/api/dailytech/{username}/posts/{id}")
	public ResponseEntity<Void> deletePost(
			@PathVariable String username, @PathVariable long id){
		
		postRepository.deleteById(id);
		
		return ResponseEntity.noContent().build();
//		Post post = postService.deleteById(id);
//		if(post!=null) {
//			return ResponseEntity.noContent().build();
//		}
//		return ResponseEntity.notFound().build();
	} 
	
	@PutMapping(path="/api/dailytech/{username}/posts/{id}")
	public ResponseEntity<PostEntity> updatePost(
			@PathVariable String username, 
			@PathVariable long id, @RequestBody PostEntity post){
		
		PostEntity postUpdated = postRepository.save(post);
		 return new ResponseEntity<PostEntity>(post, HttpStatus.OK);
		
//		 Post postUpdated = postService.save(post); 
//		 return new ResponseEntity<Post>(post, HttpStatus.OK);
	}
	
	@PostMapping(path="/api/dailytech/{username}/posts")
	public ResponseEntity<Void> createPost(
			@PathVariable String username, 
		    @RequestBody PostEntity post
			){
		 
		post.setUsername(username);
		PostEntity postCreated = postRepository.save(post);
//		 Post postCreated = postService.save(post); 
 
		 URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				 .path("/{id}").buildAndExpand(postCreated.getId()).toUri();
		 
		 return ResponseEntity.created(uri).build();
 
	}
	
}
