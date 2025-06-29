"use client";
import React, { useState, useRef } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const formRef = React.useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "617c4e75-e114-489a-866f-14fe5a763913");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData))
      }).then((res) => res.json());

      console.log(res)
      if (res.success) {
        setStatus("Message sent successfully!");
        formRef.current?.reset(); // Gunakan ref untuk reset form
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred while sending the message.");
    }
  };

  return (
    <div className="bg-transparent border border-purple-500 rounded-lg shadow-lg p-8 backdrop-blur-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Contact Me</h2>
      <form ref={formRef} onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full mb-4 p-3 border border-purple-300 bg-transparent text-white placeholder-gray-400 rounded-lg"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full mb-4 p-3 border border-purple-300 bg-transparent text-white placeholder-gray-400 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="w-full mb-4 p-3 border border-purple-300 bg-transparent text-white placeholder-gray-400 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="inline-block text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
      {status && <p className="text-white mt-4">{status}</p>}
    </div>
  );
};

export default ContactForm;