package lk.softedgelab.repo;

import lk.softedgelab.entity.Attendee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author : Chavindu
 * created : 7/17/2024-9:41 AM
 **/

@Repository
public interface AttendeeRepo extends CrudRepository<Attendee, Integer> {
    List<Attendee> findByEventId(Integer eventId);
}
