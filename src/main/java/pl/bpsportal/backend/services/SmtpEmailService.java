package pl.bpsportal.backend.services;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import pl.bpsportal.backend.services.AbstractEmailService;


public class SmtpEmailService extends AbstractEmailService{

	private static final Logger LOG = LoggerFactory.getLogger(SmtpEmailService.class);

	@Autowired
	private MailSender mailSender;

	@Override
	public void sendGenericEmailMessage(SimpleMailMessage message) {
		LOG.debug("Sending mail for: {}",message);
		mailSender.send(message);
		LOG.info("Mail send");

	}
}