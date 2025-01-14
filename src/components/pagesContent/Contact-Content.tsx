"use client";
import {useState } from 'react';
import { BackgroundBeams } from '../ui/background-beams';
import Navbar from '../Navbar';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactContent = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Message Send Handler func
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const foamData = { name, email, message };

        emailjs.send(
            "service_an85omh",
            "template_inxbkhd",
            foamData,
            "kHWlLokuiu3IOhPuj"
        )
            .then(
                (result) => {
                    console.log("message sent:", result.text);
                    // alert("Message Sent Sucessfully");
                    setName("");
                    setEmail("");
                    setMessage("");
                    toast.success("Message Send Sucessfully!");
                    console.log("ok");

                },
                (error) => {
                    console.error('Failed to send message:', error);
                    toast.error("Failed to send message. Plese Try again later.");
                }
            );

    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
                {' '}
                <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
                <div className="max-w-2xl mx-auto p-4 relative z-10">
                    {' '}
                    <h1 className="heading">
                        Let&apos;s <span className="text-purple">Work Together</span>
                    </h1>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center font-semibold">
                        I would like to know the final requirements of your project.
                        Please get in touch with me and share details about your project,
                        <span className="font-bold"> Feel Free To Conect With Me.</span>
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="rounded-lg border border-neutral-800 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                            required
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="rounded-lg border border-neutral-800 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                            required
                        />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message"
                            className="rounded-lg border border-neutral-800 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                            rows={5}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                        >
                            Send Message
                        </button>
                        <ToastContainer theme='dark' position='top-center' />
                    </form>
                </div>
            </div>

        </>
    )
}

export default ContactContent