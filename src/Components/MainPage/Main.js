import React from "react";
import { cn } from "../../utils/cn";
import HeadingOfPage from "./HeadingOfPage";
import Navbar from "../Navbar/Navbar";
import CardStackDemo from "./MainContent";
import WebinarBookingForm from "./BookWebinar";
import "./Main.css";
export default function BackgroundBoxesDemo() {
  return (
    <>
      <div
        className=" bg-[#10172A] min-h-screen min-w-screen relative overflow-hidden bg-slate-900 flex flex-col justify-center "
      >

        <Navbar />
        <p className="t-cedarville-cursive ml-4 text-white  relative z-20">
          &lt;html&gt;
        </p>
        <p className="text-white t-cedarville-cursive ml-[3rem]  relative z-20">
          &lt;head&gt;
        </p>
        <p className="text-white t-cedarville-cursive ml-[5rem]  relative z-20">
          &lt;title&gt;
        </p>
        <h1 className={cn("md:text-8xl text-xl text-white relative z-20")}>
          {/* <AnimatedBall /> */}
          <HeadingOfPage />
        </h1>
        <p className="text-white t-cedarville-cursive ml-[5rem]  relative z-20">
          &lt;/title&gt;
        </p>
        <p className="text-white t-cedarville-cursive ml-[3rem]  relative z-20">
          &lt;/head&gt;
        </p>
        <p className="text-white t-cedarville-cursive ml-[5rem]  relative z-20">
          &lt;body&gt;
        </p>

        <p className="flex text-center mt- text-neutral-300 relative z-20">
          {/* <img src="https://media3giphy.com/media/VJ65NK5synjTaL4D0I/giphy.gif" alt="gif"></img> */}
          {/* <img src="https://present.readthedocs.io/en/latest/_images/welcome-to-coding.gif"></img> */}
          <CardStackDemo />
          <WebinarBookingForm />
        </p>
        <p className="text-white t-cedarville-cursive ml-[5rem]  relative z-20">
          &lt;/body&gt;
        </p>
        <p className="text-white t-cedarville-cursive ml-4  relative z-20">
          &lt;/html&gt;
        </p>
      </div>
    </>
  );
}
