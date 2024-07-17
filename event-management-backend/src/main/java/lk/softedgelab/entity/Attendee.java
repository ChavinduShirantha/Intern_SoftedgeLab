package lk.softedgelab.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author : Chavindu
 * created : 7/17/2024-9:37 AM
 **/

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Attendee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String email;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;
}
