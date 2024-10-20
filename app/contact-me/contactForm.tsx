import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-transparent border border-purple-500 rounded-lg shadow-lg p-8 backdrop-blur-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Contact Me</h2>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border border-purple-300 bg-transparent text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border border-purple-300 bg-transparent text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full mb-4 p-3 border border-purple-300 bg-transparent text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;