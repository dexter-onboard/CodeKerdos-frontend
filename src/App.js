import React from "react";
import "./App.css";
import Main from "./Components/MainPage/Main";
import Slogan from "./Components/About/Slogan";
// import AboutUs from "./Components/AboutUs/About";
import Information from "./Components/Information/Information";
// import Offer from "./Components/Offer/Offer";
import { Steps } from "./Components/Offer/Steps";
import CurrentCourses from "./Components/Courses/CurrentCourses";
import SoonCourses from "./Components/Courses/Soon-Courses";
import Staff from "./Components/Members/Staff";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div id="content" className="fade-in">
      <Main />
      <Slogan />
      {/* <AboutUs /> */}
      <Information />
      <Steps />
      <CurrentCourses />
      <SoonCourses />
      <Staff />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
