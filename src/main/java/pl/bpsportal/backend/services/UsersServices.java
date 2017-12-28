package pl.bpsportal.backend.services;


import pl.bpsportal.web.model.Users;
import java.util.List;


public interface UsersServices {

    Iterable<Users> listAllUsers();
    Users getUsersById(Integer id);

}
