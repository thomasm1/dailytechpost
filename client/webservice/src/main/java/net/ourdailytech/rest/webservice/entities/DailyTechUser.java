package net.ourdailytech.rest.webservice.entities;

public class DailyTechUser {
	
	private String post;

	public DailyTechUser(String post) {
		this.post = post;
	}
 
	public void setPost(String post) {
		this.post = post;
	}

	public String getPost() {
		return post;
	}

	@Override
	public String toString() {
		return String.format("DailyTechBean [post=%s]", post);
	}

}
