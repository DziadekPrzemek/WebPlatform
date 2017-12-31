package pl.bpsportal.web.frontend;

import java.io.Serializable;

public class FeedbackPojo implements Serializable {

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() { return phone; }

	public void setPhone(String phone) { this.phone = phone; }

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	@Override
	public String toString() {
		final StringBuilder sb = new StringBuilder("FeedbackPojo{");
		sb.append("name='").append(name).append('\'');
		sb.append(", email='").append(email).append('\'');
		sb.append(", feedback='").append(feedback).append('\'');
		sb.append(", phone='").append(phone).append('\'');
		sb.append('}');
		return sb.toString();
	}
	private String name;
	private String email;
	private String feedback;
	private String phone;
}
