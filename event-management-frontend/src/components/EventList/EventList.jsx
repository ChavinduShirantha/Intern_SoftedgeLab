import React from 'react';

const EventList = ({ events, deleteEvent, editEvent }) => {
    const getDateOnly = (isoDateString) => {
        const date = new Date(isoDateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    return (
        <table className="table-auto w-full text-left flex justify-center items-center flex-col">
            <thead>
            <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Actions</th>
            </tr>
            </thead>
            <tbody>
            {events.map((event) => (
                <tr key={event.id} className="border-t">
                    <td className="px-4 py-2">{event.name}</td>
                    <td className="px-4 py-2">{event.description}</td>
                    <td className="px-4 py-2">{getDateOnly(event.date)}</td>
                    <td className="px-4 py-2">{event.location}</td>
                    <td className="px-4 py-2">
                        <button
                            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                            onClick={() => editEvent(event)}>
                            Edit
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                            onClick={() => deleteEvent(event.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default EventList;
