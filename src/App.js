import React from "react";
import "./App.css";
import Main from "./Components/MainPage/Main";
import Slogan from "./Components/About/Slogan";
import Information from "./Components/Information/Information";
import { Steps } from "./Components/Offer/Steps";
import CurrentCourses from "./Components/Courses/CurrentCourses";
import SoonCourses from "./Components/Courses/Soon-Courses";
import Staff from "./Components/Members/Staff";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";
import PaymentModals from "./Components/PaymentModals/PaymentModal";

function App() {
  return (
    <div id="content" className="fade-in">
      <Main />
      <Slogan />
      <Information />
      <Steps />
      <CurrentCourses />
      <SoonCourses />
      <Staff />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <PaymentModals />
    </div>
  );
}

export default App;
