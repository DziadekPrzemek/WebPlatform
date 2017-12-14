package pl.bpsportal.backend.services;

import org.springframework.mail.SimpleMailMessage;
import pl.bpsportal.web.frontend.FeedbackPojo;


public interface EmailService {
	public void sendFeedbackEmail(FeedbackPojo feedbackPojo);
	public void sendGenericEmailMessage(SimpleMailMessage message);
}