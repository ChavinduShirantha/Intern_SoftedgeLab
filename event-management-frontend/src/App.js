import './App.css';
import EventForm from "./components/EventForm/EventForm";
import {useEffect, useState} from "react";
import axios from "axios";
import EventList from "./components/EventList/EventList";
import EventDetail from "./components/EventDetail/EventDetail";

function App() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const fetchEvents = () => {
        axios.get('http://localhost:8080/api/events').then((response) => setEvents(response.data));
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const deleteEvent = (id) => {
        axios.delete(`http://localhost:8080/api/events/${id}`).then(() => fetchEvents());
    };

    const editEvent = (event) => {
        setSelectedEvent(event);
    };
    return (
        <div>
            <h1 className="text-center text-3xl font-bold p-8">Event Management System</h1>
            <EventForm fetchEvents={fetchEvents} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/>
            <EventList events={events} deleteEvent={deleteEvent} editEvent={editEvent}/>
            {selectedEvent && <EventDetail eventId={selectedEvent.id}/>}
        </div>
    );
}

export default App;
