package net.ourdailytech.rest.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SuperBuilder
@Table(name = "categories")
public class Category extends AbstractDomainClass  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    // A category can have many News items
    @ToString.Exclude  // ✅ Prevents infinite recursion
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<News> news;

    // A category can have many PostEntity items
    @ToString.Exclude  // ✅ Prevents infinite recursion
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<PostEntity> posts;
}
