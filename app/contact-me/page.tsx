import React from 'react';
import ContactForm from './contactForm'; // Import ContactForm

const ContactMe = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center p-10"
      style={{
        backgroundImage: "url(/bg-3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[80%] mx-auto text-center">
        <h1 className="text-[30px] md:text-[50px] font-semibold text-white mb-8">
          Further&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Information
          </span>
        </h1>

        <div className="flex justify-center">
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;