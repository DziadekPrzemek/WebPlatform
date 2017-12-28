package pl.bpsportal.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdminController {
	@RequestMapping("/panel")
	public String adminController(){
		return "admin/panel";
	}
}