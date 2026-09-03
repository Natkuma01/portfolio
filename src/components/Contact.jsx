import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wuvidqs",
        "template_ujfuo7r",
        form.current,
        "9L8NKVD5nYUS6g-aK"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Thank you! Your message has been sent.");
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-secondary p-6 sm:p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl sm:text-3xl mb-6 text-gray-800 font-extrabold text-center">
          Contact Me
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            required
            className="w-full px-3 py-2 bg-neutral border border-amber-200/60 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            className="w-full px-3 py-2 bg-neutral border border-amber-200/60 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            className="w-full px-3 py-2 bg-neutral border border-amber-200/60 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-accents text-gray-800 font-bold py-3 px-4 rounded-lg hover:opacity-90 transition duration-200 shadow"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
