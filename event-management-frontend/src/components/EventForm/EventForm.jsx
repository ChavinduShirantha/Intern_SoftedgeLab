import axios from "axios";
import {useState} from "react";

const EventForm = () => {
    const [event, setEvent] = useState({ name: '', description: '', date: '', location: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
    };

    /*const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/events', event)
            .then(() => {
                setEvent({ name: '', description: '', date: '', location: '' });
            });
    };*/

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/events', event)
            .then(() => {
                setEvent({ name: '', description: '', date: '', location: '' });
                setSuccessMessage('Event added successfully.');
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Error adding event:', error);
                setErrorMessage('Failed to add event. Please try again.');
                setSuccessMessage('');
            });
    };

    return (
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
                type="submit">Add Event</button>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        </form>
    )
}

export default EventForm;
