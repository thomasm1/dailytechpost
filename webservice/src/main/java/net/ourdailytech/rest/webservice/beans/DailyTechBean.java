package net.ourdailytech.rest.webservice.beans;

public class DailyTechBean {
	
	private String post;

	public DailyTechBean(String post) {
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
