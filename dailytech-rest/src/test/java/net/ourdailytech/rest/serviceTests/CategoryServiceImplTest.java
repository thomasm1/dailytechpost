package net.ourdailytech.rest.serviceTests;

import net.ourdailytech.rest.mapper.CategoryMapper;
import net.ourdailytech.rest.models.Category;
import net.ourdailytech.rest.models.dto.CategoryDto;
import net.ourdailytech.rest.repositories.CategoryRepository;
import net.ourdailytech.rest.service.CategoryServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CategoryServiceImplTest {

    @Mock
    private CategoryRepository categoryRepository;

    @Mock
    private CategoryMapper categoryMapper;

    @InjectMocks
    private CategoryServiceImpl categoryService;

    @Test
    void getRootCategoriesReturnsOnlyTopLevelCategories() {
        Category webDev = category(11L, "Web Dev Affairs", null);
        CategoryDto webDevDto = categoryDto(11L, "Web Dev Affairs", null);

        when(categoryRepository.findByParentIsNull()).thenReturn(List.of(webDev));
        when(categoryMapper.toDto(webDev)).thenReturn(webDevDto);

        List<CategoryDto> roots = categoryService.getRootCategories();

        assertEquals(1, roots.size());
        assertEquals(11L, roots.get(0).getId());
        assertEquals("Web Dev Affairs", roots.get(0).getName());
        verify(categoryRepository).findByParentIsNull();
    }

    @Test
    void getChildCategoriesReturnsDirectChildrenForParent() {
        Category webDev = category(11L, "Web Dev Affairs", null);
        Category developer = category(1101L, "Developer", webDev);
        CategoryDto developerDto = categoryDto(1101L, "Developer", 11L);

        when(categoryRepository.findById(11L)).thenReturn(Optional.of(webDev));
        when(categoryRepository.findByParentId(11L)).thenReturn(List.of(developer));
        when(categoryMapper.toDto(developer)).thenReturn(developerDto);

        List<CategoryDto> children = categoryService.getChildCategories(11L);

        assertEquals(1, children.size());
        assertEquals(1101L, children.get(0).getId());
        assertEquals(11L, children.get(0).getParentId());
        verify(categoryRepository).findByParentId(11L);
    }

    @Test
    void getCategoryTreeAddsChildrenToRootDtos() {
        Category webDev = category(11L, "Web Dev Affairs", null);
        Category developer = category(1101L, "Developer", webDev);
        CategoryDto webDevDto = categoryDto(11L, "Web Dev Affairs", null);
        CategoryDto developerDto = categoryDto(1101L, "Developer", 11L);

        when(categoryRepository.findByParentIsNull()).thenReturn(List.of(webDev));
        when(categoryRepository.findByParentId(11L)).thenReturn(List.of(developer));
        when(categoryRepository.findByParentId(1101L)).thenReturn(List.of());
        when(categoryMapper.toDto(webDev)).thenReturn(webDevDto);
        when(categoryMapper.toDto(developer)).thenReturn(developerDto);

        List<CategoryDto> tree = categoryService.getCategoryTree();

        assertEquals(1, tree.size());
        assertNotNull(tree.get(0).getChildren());
        assertEquals(1, tree.get(0).getChildren().size());
        assertEquals(1101L, tree.get(0).getChildren().get(0).getId());
    }

    private Category category(Long id, String name, Category parent) {
        Category category = new Category();
        category.setId(id);
        category.setName(name);
        category.setParent(parent);
        return category;
    }

    private CategoryDto categoryDto(Long id, String name, Long parentId) {
        CategoryDto dto = new CategoryDto();
        dto.setId(id);
        dto.setName(name);
        dto.setParentId(parentId);
        return dto;
    }
}
