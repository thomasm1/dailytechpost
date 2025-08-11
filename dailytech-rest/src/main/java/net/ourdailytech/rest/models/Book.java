package net.ourdailytech.rest.models;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Setter @Getter
@Entity
@Table(name = "books", schema = "dailytech")
@AttributeOverrides({
        @AttributeOverride(name = "title",
                column = @Column(name = "title", length = 255, nullable = false)),
        @AttributeOverride(name = "profileUrl",
                column = @Column(name = "profile_url", length = 1000))
})
public class Book extends Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "pubyear")
    private int publicationYear;

    @Column(length = 255)
    private String publisher;

    @Column(length = 500)
    private String authors;

    @Column(length = 255)
    private String genre;

    //  BigDecimal is nicer for exactness
    @Column
    private double rating;

    @Override
    public String getItemData() {
        return new StringBuilder()
                .append("<item>")
                .append("<type>Book</type>")
                .append("<title>").append(getTitle()).append("</title>")
                .append("<authors>").append(authors).append("</authors>")
                .append("<publisher>").append(publisher).append("</publisher>")
                .append("<publicationYear>").append(publicationYear).append("</publicationYear>")
                .append("<genre>").append(genre).append("</genre>")
                .append("</item>")
                .toString();
    }

    @Override
    public boolean isWeb3Link() {
        return false;
    }
}