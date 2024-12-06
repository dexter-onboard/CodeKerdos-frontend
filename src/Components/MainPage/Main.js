import React from "react";
import { cn } from "../../utils/cn";
import HeadingOfPage from "./HeadingOfPage";
import Navbar from "../Navbar/Navbar";
import CardStackDemo from "./MainContent";
import WebinarBookingForm from "./BookWebinar";
import "./Main.css";
export default function BackgroundBoxesDemo() {
  console.log(window.innerWidth);

  return (
    <>
      <div className=" bg-[#10172A] min-h-screen min-w-screen relative overflow-hidden bg-slate-900 flex flex-col justify-center ">
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
        <p className="text-white t-cedarville-cursive ml-[5rem] mt-[4rem]  relative z-20">
          &lt;/title&gt;
        </p>
        <p className="text-white t-cedarville-cursive ml-[3rem]  relative z-20">
          &lt;/head&gt;
        </p>
        <p className="text-white t-cedarville-cursive ml-[5rem]  relative z-20">
          &lt;body&gt;
        </p>

        <div className="flex md:justify-evenly mt-[2rem] mb-[2rem] md:gap-4 lg:ml-20">
          <div className="hidden md:block md:ml-8">
            <CardStackDemo />
          </div>
          <div className="ml-7 md:ml-0">
            <WebinarBookingForm />
          </div>
        </div>
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
