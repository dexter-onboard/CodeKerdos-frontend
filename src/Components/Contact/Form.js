import React, { useState } from "react";
import dayjs from "dayjs";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    AdditionalInfo: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveContactFormData = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const url =
      "https://script.google.com/macros/s/AKfycbyiZig1Yree5U6qL04vhuhNA1rvc89HVb0iY8wKzSZAelHNkxP6aGlDXE6SGoq-hwfG/exec";
    fetch(url, {
      //   mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `TimeStamp=${dayjs().format("DD/MM/YYYY HH:mm:ss")}&Name=${
        formData.Name
      }&Email=${formData.Email}&PhoneNumber=${
        formData.PhoneNumber
      }&AdditionalInfo=${formData.AdditionalInfo}`,
    })
      .then((res) => res.text())
      .then((data) => {
        setFormData({
          Name: "",
          Email: "",
          PhoneNumber: "",
          AdditionalInfo: "",
        });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 6000);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <form
        onSubmit={saveContactFormData}
        className="max-w-lg mx-auto mt-6 space-y-4 text-white"
      >
        {["Name", "Email", "PhoneNumber"].map((field, index) => (
          <input
            key={index}
            type={field === "email" ? "email" : "text"}
            name={field}
            value={formData[field]}
            onChange={(e) => handleInputChange(e)}
            required
            className="w-full placeholder-white bg-transparent border-b-2 border-white focus:ring-2 focus:ring-[#82ADD1] p-1"
            placeholder={`Your ${
              field.charAt(0).toUpperCase() + field.slice(1)
            }`}
          />
        ))}
        <textarea
          name="AdditionalInfo"
          value={formData.AdditionalInfo}
          onChange={(e) => handleInputChange(e)}
          rows="6"
          className="w-full bg-white text-gray-800 rounded-lg border-2 border-white p-2 resize-none"
          placeholder="Type your message here..."
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#2F5791] text-white rounded-lg py-2 px-6 hover:bg-[#82ADD1] transition-all duration-200"
          >
            Submit
          </button>
        </div>
      </form>
      {isSubmitted && (
        <p style={{ textAlign: "center", fontSize: "18px", color: "green" }}>
          We will connect with you shortly.
        </p>
      )}
    </>
  );
};

export default ContactForm;
