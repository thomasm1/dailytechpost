package net.ourdailytech.rest.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(
		name = "POST_ENTITY", uniqueConstraints = {@UniqueConstraint(columnNames = {"id"})}
)
public class PostEntity {

	public interface SimplePost {
		String getTitle();
//		@Value("#{target.author.name}")  //TODO MAKE AUTHOR OBJECT
		String getAuthor();
		String getPost();
		String getCat3();
		String getBlogcite();
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", nullable = false)
	private Long id;

	@Column(name = "DID", nullable = false)
	private String did;

	@Column(name = "DATE_")
	private String date;
	
	@Column(name = "AUTHOR")
	private String author; //TODO MAKE AUTHOR OBJECT
	
	@Column(name = "MONTH_ORDER")
	private String monthOrder;
	
	@Column(name = "CAT3")
	private String cat3;

	@Column(name = "TITLE", nullable = false)
	private String title;
	
	@Column(name = "POST", nullable = false, length = 3000)
	private String post;
	
	@Column(name = "BLOGCITE", nullable = false, length = 1000)
	private String blogcite;	
	
	@Column(name = "USERNAME", nullable = false)
	private String username;

	@Column(name = "STATE")
	private String state;

	@Column(name = "WORD_COUNT")
	private int wordCount;

	@Column(name = "DURATION_GOAL")
	private int durationGoal;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id" )
	private Category category;

	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Comment> comments = new HashSet<>();

	
}
