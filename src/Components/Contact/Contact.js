// import React from "react";
// import { BackgroundBeams } from "../ui/background-beams";
// import ContactForm from "./Form";
// import contactUs from "../images/contact-us.gif";

// export default function BackgroundBeamsDemo() {
//   return (
//     <div
//       style={{
//         background: "linear-gradient(95deg, #F5F5F7 50%, #10172A 50%)",
//       }}
//       className=" w-full relative flex items-center justify-center antialiased"
//     >
//       <div className="flex flex-col w-1/2 justify-center items-center gap-5">
//         <img
//           src={contactUs}
//           alt="contact-img"
//           className="w-3/4 lg:w-full max-w-xs"
//         />
//       </div>
//       <div className="w-[1px] h-80 border border-gray-700"></div>
//       <div className="mx-auto p-4">
//         <h3
//           style={{
//             fontWeight: "bold",
//             textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
//           }}
//           className="relative z-10 pb-3 text-lg md:text-5xl  bg-clip-text text-white bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
//         >
//           We’re Just a Message Away
//         </h3>
//         <p></p>
//         <p className="text-neutral-500 text-white max-w-lg mx-auto my-3 text-sm text-center relative z-10">
//           At codeKerdos, we understand that reaching out for help can feel
//           daunting. That’s why we’re here to assure you: you can trust us. Our
//           dedicated team is committed to guiding you through every step of your
//           journey, ensuring you have the support and resources you need to
//           succeed. Don’t hesitate to get in touch—let us help you achieve your
//           goals.
//         </p>
//         <ContactForm />
//         {/* <input
//           type="text"
//           placeholder="hi@manuarora.in"
//           className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" /> */}
//       </div>
//       {/* <BackgroundBeams /> */}
//     </div>
//   );
// }

import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import ContactForm from "./Form";
import contactUs from "../images/contact-us.gif";
import "./contact.css";

export default function BackgroundBeamsDemo() {
  return (
    <div className="w-full relative flex flex-col lg:flex-row items-center justify-center antialiased px-4 py-8 lg:py-16 background-demo">
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-center gap-5 mb-8 lg:mb-0">
        <img
          src={contactUs}
          alt="contact-img"
          className="w-3/4 md:w-2/3 lg:w-full max-w-xs"
        />
      </div>

      <div className="hidden lg:block w-full lg:w-[1px] h-8 lg:h-80 border border-gray-700 mb-8 lg:mb-0"></div>

      <div className="w-full lg:w-1/2 max-w-lg mx-auto text-center p-4">
        <h3
          style={{
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
          }}
          className="text-2xl md:text-4xl lg:text-5xl bg-clip-text text-white bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-4"
        >
          We’re Just a Message Away
        </h3>
        <p className="text-neutral-500 text-white max-w-md mx-auto mb-4 text-sm md:text-base">
          At codeKerdos, we understand that reaching out for help can feel
          daunting. That’s why we’re here to assure you: you can trust us. Our
          dedicated team is committed to guiding you through every step of your
          journey, ensuring you have the support and resources you need to
          succeed. Don’t hesitate to get in touch—let us help you achieve your
          goals.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
