package net.ourdailytech.rest.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import net.ourdailytech.rest.models.dto.CategoryDto;
import net.ourdailytech.rest.service.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(CategoryController.API_CATEGORIES)
public class CategoryController {

    public static final String API_CATEGORIES = "/api/categories";
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }
    @Operation(summary = "Add a new category")
    @ApiResponse(responseCode = "201", description = "Category created")
    @SecurityRequirement(    name = "Bearer Authentication" )
   //  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @PostMapping({"", "/"})
    public ResponseEntity<CategoryDto> addCategory(@RequestBody CategoryDto categoryDto){
        CategoryDto savedCategory = categoryService.addCategory(categoryDto);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }

    @Operation(summary = "Get a category by id")
    @ApiResponse(responseCode = "200", description = "Category found")
    @GetMapping("/{id}")
    public ResponseEntity<CategoryDto> getCategory(@PathVariable("id") Long categoryId){
         CategoryDto categoryDto = categoryService.getCategory(categoryId);
         return ResponseEntity.ok(categoryDto);
    }

    @Operation(summary = "Get all categories")
    @ApiResponse(responseCode = "200", description = "Categories found")
    @GetMapping
    public ResponseEntity<List<CategoryDto>> getCategories(){
        return ResponseEntity.ok(categoryService.getAllCategories());
    }

    @Operation(summary = "Get root categories")
    @ApiResponse(responseCode = "200", description = "Root categories found")
    @GetMapping("/root")
    public ResponseEntity<List<CategoryDto>> getRootCategories(){
        return ResponseEntity.ok(categoryService.getRootCategories());
    }

    @Operation(summary = "Get category tree")
    @ApiResponse(responseCode = "200", description = "Category tree found")
    @GetMapping("/tree")
    public ResponseEntity<List<CategoryDto>> getCategoryTree(){
        return ResponseEntity.ok(categoryService.getCategoryTree());
    }

    @Operation(summary = "Get direct child categories")
    @ApiResponse(responseCode = "200", description = "Child categories found")
    @GetMapping("/{id}/children")
    public ResponseEntity<List<CategoryDto>> getChildCategories(@PathVariable("id") Long categoryId){
        return ResponseEntity.ok(categoryService.getChildCategories(categoryId));
    }


    @Operation(summary = "Update a category")
    @ApiResponse(responseCode = "200", description = "Category updated")
    @SecurityRequirement(     name = "Bearer Authentication"   )
     @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @PutMapping({"", "/"}) // Allows both /api/categories/{id} and /api/categories
    public ResponseEntity<CategoryDto> updateCategory(
            @RequestParam(value = "id", required = false) Long categoryId,
            @RequestBody CategoryDto categoryDto) {

        if (categoryId != null) {
            categoryDto.setId(categoryId); // Ensure ID consistency if provided in the URL
        }
        return ResponseEntity.ok(categoryService.updateCategory(categoryDto));
    }

    @Operation(summary = "Delete a category")
    @ApiResponse(responseCode = "200", description = "Category deleted")
    @SecurityRequirement(  name = "Bearer Authentication"  )
     @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Boolean> deleteCategory(@PathVariable("id") Long categoryId){
        try {

            categoryService.deleteCategory(categoryId);
            return ResponseEntity.ok(true);
        } catch (Exception e) {
            return  ResponseEntity.notFound().build();
        }
    }
}
