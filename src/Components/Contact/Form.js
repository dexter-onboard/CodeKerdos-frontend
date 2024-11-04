import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      additionalInfo: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "600px", margin: "0 auto", color: 'white' }}
    >
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full relative z-10 placeholder-white focus:ring-2 focus:ring-[#82ADD1] bg-transparent border-b-2 border-white mb-4 p-1 text-white"
          placeholder="Your Name"
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full relative z-10 placeholder-white bg-transparent border-b-2 border-white mb-4 p-1 text-white"
          placeholder="Your Email"
        />
      </div>

      <div>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="w-full relative z-10 placeholder-white bg-transparent border-b-2 border-white mb-4 p-1 text-white"
          placeholder="Your Phone Number"
        />
      </div>

      <div>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full relative z-10 placeholder-white bg-transparent border-b-2 border-white mb-4 p-1 text-white"
          placeholder="Your Address"
        />
      </div>

      <div>
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          rows="6"
          className="w-full bg-white relative z-10 rounded-lg placeholder-white border-2 border-white mb-4 p-1"
          placeholder="Type your message here..."
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#2F5791] text-white rounded-lg py-2 px-4 hover:bg-[#82ADD1] w-1/3" // Updated button styles
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
