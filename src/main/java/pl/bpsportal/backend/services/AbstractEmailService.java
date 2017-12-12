package pl.bpsportal.backend.services;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;

import pl.bpsportal.backend.services.EmailService;
import pl.bpsportal.web.frontend.FeedbackPojo;

public abstract class AbstractEmailService implements EmailService {

	@Value("${default.to.adress}")
	private String defaultToAdress;
	protected SimpleMailMessage prepareSimpleMailMessegeFromFeedbackPojo(FeedbackPojo feedbackPojo){
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(defaultToAdress);
		message.setFrom(feedbackPojo.getEmail());
		message.setSubject("Wiadomość z formularza kontaktowego od: "+feedbackPojo.getName()+"! ");
		message.setText("Pan / Pani "+ feedbackPojo.getName() +" przesyła wiadomość następującej treści: "+feedbackPojo.getFeedback()+" Dane kontaktowe: "+feedbackPojo.getEmail());
		return message;
	}

	@Override
	public void sendFeedbackEmail(FeedbackPojo feedbackPojo) {
		sendGenericEmailMessage(prepareSimpleMailMessegeFromFeedbackPojo(feedbackPojo));
	}
}