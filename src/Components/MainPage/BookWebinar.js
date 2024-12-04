import React, { useState } from "react";
import "./Main.css";
import dayjs from "dayjs";

const WebinarBookingForm = () => {
  const [formData, setFormData] = useState({ Name: "", Email: "", Phone: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveFreeWebinarBookingData = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const url =
      "https://script.google.com/macros/s/AKfycbx4nCW6DzYfOke9OgFX8yx1FNnbI-0oD5hXVmJSUuJVMUkxzBOR7iL99Ep52m4hw3oP/exec";
    fetch(url, {
      //   mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `TimeStamp=${dayjs().format("DD/MM/YYYY HH:mm:ss")}&Name=${
        formData.Name
      }&Email=${formData.Email}&Phone=${formData.Phone}`,
    })
      .then((res) => res.text())
      .then((data) => {
        setFormData({ Name: "", Email: "", Phone: "" });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 6000);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="cardbook">
      <h2>Book a Free Webinar</h2>

      {!isSubmitted ? (
        <form className="form" onSubmit={saveFreeWebinarBookingData}>
          <input
            type="text"
            name="Name"
            placeholder="Name"
            required
            value={formData.Name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            value={formData.Email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="Phone"
            placeholder="Phone"
            required
            value={formData.Phone}
            onChange={handleInputChange}
          />

          {/* <label htmlFor="webinar-date">Select Webinar Date:</label>
                <select 
                    id="webinar-date" 
                    name="entry.3344556677" 
                    required 
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #DDDDDD', color: '#A0A6A3' }}
                >
                    <option value="">--Select a date--</option>
                    <option value="Date1">Date 1</option>
                    <option value="Date2">Date 2</option>
                    <option value="Date3">Date 3</option>
                </select> */}

          <button type="submit" className="login_btn" disabled={isLoading}>
            {isLoading ? "Booking..." : "Book Now"}
          </button>
        </form>
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", color: "green" }}>
          Booking done! Thank you. Details will be shared to you shortly.
        </p>
      )}
    </div>
  );
};

export default WebinarBookingForm;
