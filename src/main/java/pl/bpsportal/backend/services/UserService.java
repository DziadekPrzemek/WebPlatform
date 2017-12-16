package pl.bpsportal.backend.services;

import pl.bpsportal.web.model.User;

public interface UserService {
	public User findUserByEmail(String email);
	public void saveUser(User user);
}