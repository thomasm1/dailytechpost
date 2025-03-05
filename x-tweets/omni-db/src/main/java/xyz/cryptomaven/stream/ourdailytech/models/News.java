package xyz.cryptomaven.stream.ourdailytech.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.proxy.HibernateProxy;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "news")
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "url")
    private String url;

    // Many news items can belong to one Category
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

}
