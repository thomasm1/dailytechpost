package net.ourdailytech.rest.webservice.beans;

public class Post {

	private long id;
	private String did;
	private String date;
	private String author;
	private String cat3;
	private String title;
	private String post;
	private String blogcite;	
	
	public Post(long id, String did, String date, String author, String cat3, String title, String post,
			String blogcite) {
		super();
		this.id = id;
		this.did = did;
		this.date = date;
		this.author = author;
		this.cat3 = cat3;
		this.title = title;
		this.post = post;
		this.blogcite = blogcite;
	}
 

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDid() {
		return did;
	}

	public void setDid(String did) {
		this.did = did;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getCat3() {
		return cat3;
	}

	public void setCat3(String cat3) {
		this.cat3 = cat3;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPost() {
		return post;
	}

	public void setPost(String post) {
		this.post = post;
	}

	public String getBlogcite() {
		return blogcite;
	}

	public void setBlogcite(String blogcite) {
		this.blogcite = blogcite;
	}

	@Override
	public String toString() {
		return "Post [id=" + id + ", did=" + did + ", date=" + date + ", author=" + author + ", cat3=" + cat3
				+ ", title=" + title + ", post=" + post + ", blogcite=" + blogcite + "]";
	}
	
}
