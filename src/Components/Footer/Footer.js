import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import {
  facebookLink,
  instagramLink,
  linkedinLink,
  privacyPolicyLink,
  termsOfUseLink,
  youtubeLink,
} from "./pdfLinks";
// import logoImg from "../images/logo-no-background.png";

export default function BackgroundBeamsWithCollisionDemo() {
  const openPdfLinks = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      console.error("PDF link is not provided.");
    }
  };

  const openSocialMediaLink = (link) => {
    window.open(link, "_blank");
  };

  const openPrivacyPolicy = () => {
    window.open(
      "https://codekerdos.s3.us-east-1.amazonaws.com/CodeKerdos-Privacy+Policy.pdf",
      "_blank"
    );
  };

  const openTermsOfUse = (link) => {
    window.open(
      "https://codekerdos.s3.us-east-1.amazonaws.com/CodeKerdos-Terms+of+Service.pdf",
      "_blank"
    );
  };

  return (
    <BackgroundBeamsWithCollision className={"h-[30rem] flex flex-col"}>
      <h2 className="text-2xl relative z-10 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
        C<span className="text-[#E3C42E]">o</span>de
        <span className="text-[#15C0FC]">Kerdos</span>
        <span className="ml-5 block">
          <span className="block md:inline">
            <span className="ml-2 text-white text-lg">
              <i class="fa-solid fa-phone text-white mt-1"></i>
            </span>
            <a href="tel:+919266404473" className="ml-2 text-white text-lg">
              +91 92664 04473
            </a>
          </span>
          <span className="block md:inline">
            <span className="ml-2 text-white text-lg">
              {" "}
              <i class="fa-solid fa-envelope text-white mt-1"></i>
            </span>
            <a
              href="mailto:support@codekerdos.in"
              className="ml-2 text-white text-lg"
            >
              support@codekerdos.in
            </a>
          </span>
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

      <div className="flex gap-5 mt-3">
        <div className="cursor-pointer" onClick={() => openPrivacyPolicy()}>
          <h6 className="text-white hover:underline">Privacy policy</h6>
        </div>
        <div className="cursor-pointer" onClick={() => openTermsOfUse()}>
          <h6 className="text-white hover:underline">Terms & conditions</h6>
        </div>
      </div>

      <div className="flex gap-5 mt-4">
        <button onClick={() => openSocialMediaLink(facebookLink)}>
          <img src="facebook.png" alt="facebook" className="w-7 h-7" />
        </button>
        <button onClick={() => openSocialMediaLink(instagramLink)}>
          <img src="instagram.png" alt="instagram" className="w-7 h-7" />
        </button>
        <button onClick={() => openSocialMediaLink(youtubeLink)}>
          <img src="youtube.png" alt="youtube" className="w-7 h-7" />
        </button>
        <button onClick={() => openSocialMediaLink(linkedinLink)}>
          <img src="linkedin.png" alt="linkedin" className="w-7 h-7" />
        </button>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
