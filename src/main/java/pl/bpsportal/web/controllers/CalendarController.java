package pl.bpsportal.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
public class CalendarController {
	@RequestMapping(value="/calendar", method = RequestMethod.GET)
	public ModelAndView calendar(){
		ModelAndView modelAndView = new ModelAndView("calendar/calendar");
		return modelAndView;
	}
}
