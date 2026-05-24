package net.ourdailytech.rest.service;

import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.mapper.CategoryMapper;
import net.ourdailytech.rest.models.Category;
import net.ourdailytech.rest.models.dto.CategoryDto;
import net.ourdailytech.rest.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CategoryMapper categoryMapper;

    public CategoryDto addCategory(CategoryDto categoryDto) {
        Category cat3 = categoryMapper.toEntity(categoryDto);
        assignParent(cat3, resolveParentId(cat3.getId(), categoryDto.getParentId()));
        categoryRepository.save(cat3);

        CategoryDto catNewDto = categoryMapper.toDto(cat3);
        return catNewDto;
    }

    @Override
    public CategoryDto getCategory(Long categoryId) {

        Category category = categoryRepository.findById(categoryId).orElseThrow(
                () -> new ResourceNotFoundException("Category", "id", Long.toString(categoryId)));

        return categoryMapper.toDto(category);
    }

    @Override
    public List<CategoryDto> getAllCategories() {

        List<Category> categories = categoryRepository.findAll();
        List<CategoryDto> catDto = categories.stream().map(categoryMapper::toDto)
                .collect(Collectors.toList());
        return catDto;
    }

    @Override
    public List<CategoryDto> getRootCategories() {
        return categoryRepository.findByParentIsNull().stream()
                .map(categoryMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<CategoryDto> getChildCategories(Long parentId) {
        ensureCategoryExists(parentId);
        return categoryRepository.findByParentId(parentId).stream()
                .map(categoryMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<CategoryDto> getCategoryTree() {
        return categoryRepository.findByParentIsNull().stream()
                .map(this::toTreeDto)
                .collect(Collectors.toList());
    }

    @Override
    public CategoryDto updateCategory(CategoryDto categoryDto ) {

        Category category = categoryMapper.toEntity(categoryDto);
        Category categoryUpdate = categoryRepository.findById(category.getId()).orElseThrow(
                () -> new ResourceNotFoundException("Category", "id", Long.toString(category.getId())));

        categoryMapper.partialUpdate(categoryDto, categoryUpdate);
        if (categoryDto.getParentId() != null) {
            assignParent(categoryUpdate, categoryDto.getParentId());
        } else if (categoryUpdate.getParent() == null) {
            assignParent(categoryUpdate, resolveParentId(categoryUpdate.getId(), null));
        }

        Category categoryDone = categoryRepository.save(categoryUpdate);

        return categoryMapper.toDto(categoryDone);
    }

    @Override
    public boolean deleteCategory(Long categoryId) {
        try {
            categoryRepository.deleteById(categoryId);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private CategoryDto toTreeDto(Category category) {
        CategoryDto dto = categoryMapper.toDto(category);
        dto.setChildren(categoryRepository.findByParentId(category.getId()).stream()
                .map(this::toTreeDto)
                .collect(Collectors.toList()));
        return dto;
    }

    private void assignParent(Category category, Long parentId) {
        if (parentId == null) {
            category.setParent(null);
            return;
        }
        if (category.getId() != null && category.getId().equals(parentId)) {
            throw new IllegalArgumentException("Category cannot be its own parent");
        }
        category.setParent(ensureCategoryExists(parentId));
    }

    private Long resolveParentId(Long categoryId, Long requestedParentId) {
        if (requestedParentId != null || categoryId == null) {
            return requestedParentId;
        }
        if (categoryId >= 10 && categoryId <= 99) {
            return null;
        }
        if (categoryId >= 1000 && categoryId <= 9999) {
            return categoryId / 100;
        }
        return null;
    }

    private Category ensureCategoryExists(Long categoryId) {
        return categoryRepository.findById(categoryId).orElseThrow(
                () -> new ResourceNotFoundException("Category", "id", Long.toString(categoryId)));
    }
}
