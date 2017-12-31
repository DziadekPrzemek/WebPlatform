package pl.bpsportal.web.repository;
import org.springframework.data.repository.CrudRepository;
import pl.bpsportal.web.model.Events;
import java.util.List;

public interface EventRepository extends CrudRepository<Events, Long> {
    List<Events> findAll();
}