package pl.bpsportal.web.repository;

import org.springframework.data.repository.CrudRepository;
import pl.bpsportal.web.model.Users;

public interface UsersRepository extends CrudRepository<Users, Integer> {
}