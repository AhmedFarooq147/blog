'use client'
import React, { useState } from "react"
import Swal from 'sweetalert2'


export default function Contact() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [subject, setsubject] = useState('')
    const [message, setmsg] = useState('')
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const nameInput = target.elements.namedItem('name') as HTMLInputElement;
        const emailInput = target.elements.namedItem('email') as HTMLInputElement;
        const messageInput = target.elements.namedItem('message') as HTMLTextAreaElement;

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "420dc55c-d50f-4b77-9fd7-9d3be14721b4",

                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            Swal.fire({
                title: "success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            setemail('');
            setname('')
            setsubject('')
            setmsg('')

        }
    }

    return (
        <div className="leading-6">
            <div className=" max-w-[600px] my-[50px] mx-auto p-[20px] bg-white rounded-[8px] shadow-md">
                <h1 className="text-[#007BFF] text-center text-[2rem] font-bold ">
                    Contact Us
                </h1>
                <p className="mt-5">
                    If you have any questions, suggestions, or feedback, feel free to fill out the form below or reach out to us directly!
                </p>
                <form onSubmit={handleSubmit} >
                    <div className="grid grid-rows-4">
                        <label className="mt-[30px] mb-[5px] font-bold" htmlFor="name">Name:</label>
                        <input value={name} onChange={(e) => { setname(e.target.value) }} name="name" className="p-[10px] mb-[15px] border-[1px] border-solid border-[#ddd] rounded-[5px]" type="text" placeholder="Your Name" />
                        <label className="mt-[30px] mb-[5px] font-bold" htmlFor="email" aria-required>Email:</label>
                        <input value={email} onChange={(e) => { setemail(e.target.value) }} name="email" className="p-[10px] mb-[15px] border-[1px] border-solid border-[#ddd] rounded-[5px]" type="email" placeholder="Your Email" />
                        <label className="mt-[10px] mb-[5px] font-bold" htmlFor="subject">Subject:</label>
                        <input value={subject} onChange={(e) => { setsubject(e.target.value) }} name="subject" className="p-[10px] mb-[15px] border-[1px] border-solid border-[#ddd] rounded-[5px]" type="text" placeholder="Subject" />
                        <label className="mt-[10px] mb-[5px] font-bold" htmlFor="message">Message:</label>
                        <textarea value={message} onChange={(e) => { setmsg(e.target.value) }} className="p-[10px] mb-[15px] border-[1px] border-solid border-[#ddd] rounded-[5px]"
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <button typeof="submit" className="py-[10px]  w-full px-[20px] bg-[#007BFF] text-white rounded-[5px] cursor-pointer scale-[0.3s] hover:bg-[#0056b3]  " type="submit">Send Message</button>
                </form>

            </div>

        </div>
    )
};