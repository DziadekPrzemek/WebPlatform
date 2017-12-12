package pl.bpsportal.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import pl.bpsportal.backend.services.EmailService;
import pl.bpsportal.backend.services.SmtpEmailService;


@Configuration
@Profile("dev")
@PropertySource("classpath:application-dev.properties.txt")
public class ProductionConfig {

	@Bean
	public EmailService emailService(){
		return new SmtpEmailService();

	}
}