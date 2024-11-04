import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
// import logoImg from "../images/logo-no-background.png";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className={"h-[30rem]"}>
      <h2 className="  text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
        C<span className="text-[#E3C42E]">o</span>de
        <span className="text-[#15C0FC]">Kerdos</span>
          <span className="ml-5">
            <span className="ml-2 text-white text-lg"><i class="fa-solid fa-envelope text-white mt-1"></i></span>
            <span className="ml-2 text-white text-lg">+91 92664 04473</span>
            <span className="ml-2 text-white text-lg"> <i class="fa-solid fa-phone text-white mt-1"></i></span>
            <span className="ml-2 text-white text-lg">support@codekerdos.com</span>  
          </span>
         <hr />               
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            
            <span className="">&copy; 2024 All right reserved</span>
          </div>
          <div className="relative bg-clip-text text-white bg-no-repeat  py-4">
            <span className="">&copy; 2024 All right reserved</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
