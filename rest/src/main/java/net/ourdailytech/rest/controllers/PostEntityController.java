package net.ourdailytech.rest.controllers;

import net.ourdailytech.rest.util.Constant;
import net.ourdailytech.rest.mapper.PostEntityMapper;
import net.ourdailytech.rest.models.dto.PostEntityDto;
import net.ourdailytech.rest.models.dto.PostEntityResponse;
import net.ourdailytech.rest.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "/api/posts")
@CrossOrigin(origins = "*")
@RestController
public class PostEntityController {

    @Autowired
    private PostService postService;

	@Autowired
	private PostEntityMapper postEntityMapper;

    @PostMapping("")
    public ResponseEntity<PostEntityDto> createPost(@RequestBody PostEntityDto postEntityDto){
        return new ResponseEntity<>(postService.createPost(postEntityDto), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<PostEntityResponse>  getAllPosts(
            @RequestParam(value = "pageNo", defaultValue = Constant.DEFAULT_PAGE_NUMBER,  required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = Constant.DEFAULT_PAGE_SIZE, required = false) int pageSize,
            @RequestParam(value = "sortBy", defaultValue =  Constant.DEFAULT_SORT_BY, required = false) String sortBy,
            @RequestParam(value = "sortDir", defaultValue = Constant.DEFAULT_SORT_DIRECTION, required = false) String sortDir
    ){
        PostEntityResponse resp =  postService.getAllPosts(pageNo, pageSize, sortBy, sortDir);
        if (resp.getContent().isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return ResponseEntity.noContent().build();
        } else {
            return new ResponseEntity<>(resp, HttpStatus.OK);
        }
    }

    @GetMapping("/username/{username}")
    public  ResponseEntity<PostEntityResponse>  getAllPostsByUsername(
            @RequestParam(value = "pageNo", defaultValue = Constant.DEFAULT_PAGE_NUMBER, required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = Constant.DEFAULT_PAGE_SIZE, required = false) int pageSize,
            @RequestParam(value = "sortBy", defaultValue =  Constant.DEFAULT_SORT_BY, required = false) String sortBy,
            @RequestParam(value = "sortDir", defaultValue = Constant.DEFAULT_SORT_DIRECTION, required = false) String sortDir,
            @PathVariable String username
    ){
        PostEntityResponse resp = postService.getAllPostsByUsername(pageNo, pageSize, sortBy, sortDir, username);
        if (resp.getContent().isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            return ResponseEntity.noContent().build();
        } else {
            return new ResponseEntity<>(resp, HttpStatus.OK);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostEntityDto> getPostById(@PathVariable(name = "id") long id){
        return ResponseEntity.ok(postService.getPostById(id));
    }
    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<PostEntityDto>> getPostsByCategoryId(@PathVariable( "categoryId") long categoryId){
        List<PostEntityDto> postEntityDtoList = (List<PostEntityDto>) postService.getPostsByCategoryId(categoryId);
        return ResponseEntity.ok(postEntityDtoList);
    }


    @GetMapping("/date/{did}")
    public ResponseEntity<PostEntityDto> getPostByDid(@PathVariable(name = "did") String did){
        return ResponseEntity.ok(postService.getPostByDid(did));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PostEntityDto> updatePost(@RequestBody PostEntityDto postEntityDto, @PathVariable(name = "id") long id){
        PostEntityDto postResponse = postService.updatePost(postEntityDto, id);
        return new ResponseEntity<>(postResponse, HttpStatus.OK);
    }

@DeleteMapping("/{id}")
public ResponseEntity<Boolean> deletePostById(@PathVariable(name = "id") long id){
    try {
        postService.deletePostById(id);
        return new ResponseEntity<>(true, HttpStatus.OK);
    } catch (Exception e) {
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}

}
