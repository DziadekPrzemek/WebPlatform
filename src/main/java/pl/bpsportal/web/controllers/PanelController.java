package pl.bpsportal.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import pl.bpsportal.backend.services.UserService;
import pl.bpsportal.backend.services.UsersServices;
import pl.bpsportal.web.model.User;

import javax.validation.Valid;



@Controller
public class PanelController {

	private final UserService userService;
	private UsersServices usersServices;

	@Autowired
	public void setUsersServices(UsersServices usersServices){
		this.usersServices = usersServices;
	}

	@Autowired
	public PanelController(UserService userService) {
		this.userService = userService;
	}


	@RequestMapping(value="panel", method = RequestMethod.GET)
	public ModelAndView list(){
		ModelAndView modelAndView = new ModelAndView();
		User user = new User();
		modelAndView.addObject("user", user);
		modelAndView.addObject("Users", usersServices.listAllUsers());
		modelAndView.setViewName("admin/panel");
		return modelAndView;

	}

	@RequestMapping(value = "/panel", method = RequestMethod.POST)
	public ModelAndView createNewUser(@Valid User user, BindingResult bindingResult) {
		ModelAndView modelAndView = new ModelAndView();
		User userExists = userService.findUserByEmail(user.getEmail());
		if (userExists != null) {
			bindingResult
					.rejectValue("email", "error.user",
							"Użytkownik o tym adresie email już istnieje!!");
		}
		if (bindingResult.hasErrors()) {
			modelAndView.setViewName("admin/panel");
		} else {
			userService.saveUser(user);
			modelAndView.addObject("successMessage", "Zarejestrowano nowego użytkownika!");
			modelAndView.addObject("user", new User());
			modelAndView.setViewName("admin/panel");

		}
		return modelAndView;
	}
}
