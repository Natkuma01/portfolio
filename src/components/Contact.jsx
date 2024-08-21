import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wuvidqs', 'template_ujfuo7r', form.current, '9L8NKVD5nYUS6g-aK')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Thank you! Your message has been sent.');
            }, (error) => {
                console.log('Failed to send email:', error.text);
                alert('Oops! Something went wrong. Please try again.');
            });

        e.target.reset();
    };

    return (
        <div className="h-[2000px] bg-primary">
        <div className="flex items-center justify-center min-h-screen">
            <form ref={form} onSubmit={sendEmail} className="w-full max-w-md bg-secondary p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl mb-6 text-gray-700 font-extrabold">Contact Me</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        id="name"
                        required
                        className="w-full px-3 py-2 bg-neutral border rounded-lg text-gray-700 focus:outline-none focus:border-gray-700"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        id="email"
                        required
                        className="w-full px-3 py-2 bg-neutral border rounded-lg text-gray-700 focus:outline-none focus:border-gray-700"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        rows="5"
                        className="w-full px-3 py-2 bg-neutral border rounded-lg text-gray-700 focus:outline-none focus:border-gray-700"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-accents text-gray-400 font-bold py-2 px-4 rounded-lg hover:bg-red-300 transition duration-200"
                >
                    Send
                </button>
            </form>
        </div>
        </div>
    );
};

export default Contact;
