package pl.bpsportal.backend.services;

import org.springframework.mail.SimpleMailMessage;
import pl.bpsportal.web.frontend.FeedbackPojo;


public interface EmailService {
	 void sendFeedbackEmail(FeedbackPojo feedbackPojo);
	void sendGenericEmailMessage(SimpleMailMessage message);
}