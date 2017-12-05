package pl.bpsportal.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AboutController {
	@RequestMapping("/about")
	public String aboutController(){
		return "about/about";
	}
}
