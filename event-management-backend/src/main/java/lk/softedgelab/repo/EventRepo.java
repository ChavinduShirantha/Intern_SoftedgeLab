package lk.softedgelab.repo;

import lk.softedgelab.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author : Chavindu
 * created : 7/17/2024-9:40 AM
 **/

@Repository
public interface EventRepo extends JpaRepository<Event, Integer> {
}
