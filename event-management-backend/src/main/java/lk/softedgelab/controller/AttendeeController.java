package lk.softedgelab.controller;

import lk.softedgelab.entity.Attendee;
import lk.softedgelab.entity.Event;
import lk.softedgelab.exception.ResourceNotFoundException;
import lk.softedgelab.repo.AttendeeRepo;
import lk.softedgelab.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author : Chavindu
 * created : 7/17/2024-9:51 AM
 **/

@RestController
@RequestMapping("/api/attendees")
public class AttendeeController {
    @Autowired
    private AttendeeRepo attendeeRepository;

    @Autowired
    private EventRepo eventRepository;

    @PostMapping("/{eventId}")
    public Attendee registerAttendee(@PathVariable Integer eventId, @RequestBody Attendee attendee) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found for this id :: " + eventId));
        attendee.setEvent(event);
        return attendeeRepository.save(attendee);
    }

    @GetMapping("/{eventId}")
    public List<Attendee> getAttendeesByEvent(@PathVariable Integer eventId) {
        return attendeeRepository.findByEventId(eventId);
    }
}
