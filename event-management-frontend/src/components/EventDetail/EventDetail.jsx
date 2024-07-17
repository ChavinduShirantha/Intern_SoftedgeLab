import React, {useEffect, useState} from 'react';
import axios from 'axios';

const EventDetail = ({eventId}) => {
    const [event, setEvent] = useState(null);
    const [attendees, setAttendees] = useState([]);
    const [attendee, setAttendee] = useState({name: '', email: '', contact: ''});

    useEffect(() => {
        axios.get(`http://localhost:8080/api/events/${eventId}`).then((response) => setEvent(response.data));
        axios.get(`http://localhost:8080/api/attendees/${eventId}`).then((response) => setAttendees(response.data));
    }, [eventId]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setAttendee((prevAttendee) => ({...prevAttendee, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/attendees/${eventId}`, attendee)
            .then(() => {
                setAttendees((prevAttendees) => [...prevAttendees, attendee]);
                setAttendee({name: '', email: '', contact: ''});
            });
    };

    return (
        <div>
            {event && (
                <>
                    <h2 className="text-center text-3xl font-bold p-8">Attendees</h2>
                    <form className="flex justify-center items-center flex-col" onSubmit={handleSubmit}>
                        <input className="bg-[#444544] text-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                            focus:ring focus:ring-opacity-40 lg:w-1/4 sm:w-1/2 px-4 py-2 mt-2" name="name"
                               value={attendee.name} onChange={handleChange} placeholder="Name" required/>
                        <input className="bg-[#444544] text-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                            focus:ring focus:ring-opacity-40 lg:w-1/4 sm:w-1/2 px-4 py-2 mt-2" name="email"
                               value={attendee.email} onChange={handleChange} placeholder="Email"
                               required/>
                        <input className="bg-[#444544] text-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                            focus:ring focus:ring-opacity-40 lg:w-1/4 sm:w-1/2 px-4 py-2 mt-2" name="contact"
                               value={attendee.contact} onChange={handleChange} placeholder="Contact"
                               required/>
                        <button className="mt-4 pl-10 pr-10 pt-2 pb-2 bg-[#2cc1fc] text-[18px]
                                    font-bold text-[#e6f0e6] rounded border-[2px] border-[#2cc1fc]
                                    hover:bg-[#444544] hover:text-[#2cc1fc] hover:border-[2px]
                                    hover:border-[#2cc1fc] hover:scale-110 mb-16" type="submit">Register
                        </button>
                    </form>

                    <table className="table-auto w-full flex justify-center items-center flex-col text-left">
                        <thead>
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Contact</th>
                        </tr>
                        </thead>
                        <tbody>
                        {attendees.map((attendee) => (
                            <tr key={attendee.id} className="border-t">
                                <td className="px-4 py-2">{attendee.name}</td>
                                <td className="px-4 py-2">{attendee.email}</td>
                                <td className="px-4 py-2">{attendee.contact}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default EventDetail;
