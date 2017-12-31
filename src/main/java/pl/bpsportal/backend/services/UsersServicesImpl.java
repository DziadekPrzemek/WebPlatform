package pl.bpsportal.backend.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.bpsportal.web.model.Users;
import pl.bpsportal.web.repository.UsersRepository;


@Service
public class UsersServicesImpl implements UsersServices {
    private UsersRepository usersRepository;

    @Autowired
    public void setProductRepository(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public Iterable<Users> listAllUsers() {
        return usersRepository.findAll();
    }

    @Override
    public Users getUsersById(Integer id) {
        return null;
    }


}