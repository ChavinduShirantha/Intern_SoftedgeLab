package lk.softedgelab.controller;

import lk.softedgelab.entity.Event;
import lk.softedgelab.exception.ResourceNotFoundException;
import lk.softedgelab.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author : Chavindu
 * created : 7/17/2024-9:48 AM
 **/

@RestController
@RequestMapping("/api/events")
public class EventController {
    @Autowired
    private EventRepo eventRepository;

    @GetMapping
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Integer id, @RequestBody Event eventDetails) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for this id :: " + id));
        event.setName(eventDetails.getName());
        event.setDescription(eventDetails.getDescription());
//        event.setDate(eventDetails.getDate());
        event.setLocation(eventDetails.getLocation());
        final Event updatedEvent = eventRepository.save(event);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteEvent(@PathVariable Integer id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for this id :: " + id));
        eventRepository.delete(event);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
