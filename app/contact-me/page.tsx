import React from 'react';
import ContactForm from './contactForm'; // Import ContactForm
import ContactInfo from './contactInfo'; // Import ContactInfo

const ContactMe = () => {
  return (
    <div className="h-auto bg-cover bg-center flex items-center p-10" style={{ backgroundImage: "url(/bg-3.jpg)" }}>
      <div className="max-w-[80%] mx-auto text-center">
        <h1 className="text-[40px] font-semibold text-white mb-8">
          Further&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Information
          </span>
        </h1>

        <div className="flex justify-center">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          {/* <ContactInfo /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;