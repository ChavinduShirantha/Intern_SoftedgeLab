const EventForm = () => {
    return (
        <form className="flex justify-center items-center flex-col">
            <input
                className="bg-[#444544] text-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                            focus:ring focus:ring-opacity-40 lg:w-1/4 sm:w-1/2 px-4 py-2 mt-2"
                name="name" placeholder="Event Name" required/>
            <textarea className="bg-[#444544] text-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                            focus:ring focus:ring-opacity-40 lg:w-1/4 sm:w-1/2 px-4 py-2 mt-2"
                name="description" placeholder="Description"
                      required></textarea>
            <input className="bg-[#444544] text-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                            focus:ring focus:ring-opacity-40 lg:w-1/4 sm:w-1/2 px-4 py-2 mt-2"
                type="date" name="date" required/>
            <input className="bg-[#444544] text-white border rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                            focus:ring focus:ring-opacity-40 lg:w-1/4 sm:w-1/2 px-4 py-2 mt-2"
                name="location" placeholder="Location" required/>
            <button className="mt-4 pl-10 pr-10 pt-2 pb-2 bg-[#2cc1fc] text-[18px]
                                    font-bold text-[#e6f0e6] rounded border-[2px] border-[#2cc1fc]
                                    hover:bg-[#444544] hover:text-[#2cc1fc] hover:border-[2px]
                                    hover:border-[#2cc1fc] hover:scale-110"
                type="submit">Add Event</button>
        </form>
    )
}

export default EventForm;
