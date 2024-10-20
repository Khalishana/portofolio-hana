import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Info</h2>
      <p className="text-gray-600 mb-2">
        <strong>Email:</strong> khalisha.hana@example.com
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Phone:</strong> +62 812-3456-7890
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Location:</strong> Jakarta, Indonesia
      </p>
    </div>
  );
};

export default ContactInfo;
