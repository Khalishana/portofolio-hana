import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;