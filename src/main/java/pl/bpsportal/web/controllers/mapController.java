package pl.bpsportal.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class mapController {
	@RequestMapping("/map")
	public String mapController(){
		return "map/map";
	}
}