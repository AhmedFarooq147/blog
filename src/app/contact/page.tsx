

import React from "react"






export default function Contact() {

    return (
        <div className="leading-6">
            <div className=" max-w-[600px] my-[50px] mx-auto p-[20px] bg-white rounded-[8px] shadow-md">
                <h1 className="text-[#007BFF] text-center text-[2rem] font-bold ">
                    Contact Us
                </h1>
                <p className="mt-5">
                    If you have any questions, suggestions, or feedback, feel free to fill out the form below or reach out to us directly!
                </p>
                <div className="grid grid-rows-4">
                    <label className="mt-[30px] mb-[5px] font-bold" htmlFor="name">Name:</label>
                    <input className="p-[10px] mb-[15px] border-[1px] border-solid border-[#ddd] rounded-[5px]" type="text" placeholder="Your Name" />
                    <label className="mt-[30px] mb-[5px] font-bold" htmlFor="email" aria-required>Email:</label>
                    <input className="p-[10px] mb-[15px] border-[1px] border-solid border-[#ddd] rounded-[5px]" type="email" placeholder="Your Email" />
                    <label className="mt-[10px] mb-[5px] font-bold" htmlFor="subject">Subject:</label>
                    <input className="p-[10px] mb-[15px] border-[1px] border-solid border-[#ddd] rounded-[5px]" type="text" placeholder="Subject" />
                    <label className="mt-[10px] mb-[5px] font-bold" htmlFor="message">Message:</label>
                    <textarea className="p-[10px] mb-[15px] border-[1px] border-solid border-[#ddd] rounded-[5px]"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>
                <a href={'/contact'}>
                   
                        <button className="py-[10px]  w-full px-[20px] bg-[#007BFF] text-white rounded-[5px] cursor-pointer scale-[0.3s] hover:bg-[#0056b3]  " type="submit">Send Message</button>
                    </a>

            </div>
        </div>
    )
};