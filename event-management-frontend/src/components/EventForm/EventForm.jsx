import axios from "axios";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const EventForm = ({fetchEvents, selectedEvent, setSelectedEvent }) => {
    const [event, setEvent] = useState({name: '', description: '', date: '', location: ''});

    useEffect(() => {
        if (selectedEvent) {
            setEvent(selectedEvent);
        } else {
            setEvent({ name: '', description: '', date: '', location: '' });
        }
    }, [selectedEvent]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEvent((prevEvent) => ({...prevEvent, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedEvent) {
            axios.put(`http://localhost:8080/api/events/${selectedEvent.id}`, event)
                .then(() => {
                    fetchEvents();
                    setSelectedEvent(null);
                    toast.success('Event updated successfully!');
                })
                .catch(error => {
                    console.error('Error updating event:', error);
                    toast.error('Failed to update event.');
                });
        } else {
            axios.post('http://localhost:8080/api/events', event)
                .then(() => {
                    fetchEvents();
                    toast.success('Event added successfully!');
                })
                .catch(error => {
                    console.error('Error adding event:', error);
                    toast.error('Failed to add event.');
                });
        }
    };

    return (
        <div>
            <ToastContainer position={"top-center"}/>
            <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
                <input
                    className="bg-[#444544] text-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                            focus:ring focus:ring-opacity-40 lg:w-1/4 sm:w-1/2 px-4 py-2 mt-2"
                    name="name" placeholder="Event Name" value={event.name} onChange={handleChange} required/>
                <textarea className="bg-[#444544] text-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                            focus:ring focus:ring-opacity-40 lg:w-1/4 sm:w-1/2 px-4 py-2 mt-2"
                          name="description" placeholder="Description" value={event.description} onChange={handleChange}
                          required></textarea>
                <input className="bg-[#444544] text-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                            focus:ring focus:ring-opacity-40 lg:w-1/4 sm:w-1/2 px-4 py-2 mt-2"
                       type="date" name="date" value={event.date} onChange={handleChange} required/>
                <input className="bg-[#444544] text-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                            focus:ring focus:ring-opacity-40 lg:w-1/4 sm:w-1/2 px-4 py-2 mt-2"
                       name="location" placeholder="Location" value={event.location} onChange={handleChange} required/>
                <button className="mt-4 pl-10 pr-10 pt-2 pb-2 bg-[#2cc1fc] text-[18px]
                                    font-bold text-[#e6f0e6] rounded border-[2px] border-[#2cc1fc]
                                    hover:bg-[#444544] hover:text-[#2cc1fc] hover:border-[2px]
                                    hover:border-[#2cc1fc] hover:scale-110"
                        type="submit">{selectedEvent ? 'Update Event' : 'Add Event'}
                </button>
            </form>
        </div>
    )
}

export default EventForm;
