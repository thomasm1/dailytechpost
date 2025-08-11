package net.ourdailytech.rest.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;

/**
 * A DTO for the {@link Book} entity
 */
@Data
@AllArgsConstructor
 @RequiredArgsConstructor
public class BookDto implements Serializable {
    private Long id;
    private int publicationYear;
    private String publisher;
    private String authors;
    private String genre;
    private double rating;
    private String title;

}