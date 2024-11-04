import React from 'react';
import './Main.css'; // Assuming you save the CSS in App.css

const WebinarBookingForm = () => {
    return (
        <div className="cardbook">
            <h2>Book a Free Webinar</h2>
            <form 
                action="YOUR_GOOGLE_FORM_LINK" 
                method="POST" 
                target="_blank" 
                className="form"
            >
                <input 
                    type="text" 
                    name="entry.123456789" 
                    placeholder="Name" 
                    required 
                />
                <input 
                    type="email" 
                    name="entry.987654321" 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="tel" 
                    name="entry.1122334455" 
                    placeholder="Phone Number" 
                    required 
                />
                
                <label htmlFor="webinar-date">Select Webinar Date:</label>
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
                </select>

                <button type="submit" className="login_btn">Book Now</button>
            </form>
        </div>
    );
};

export default WebinarBookingForm;
