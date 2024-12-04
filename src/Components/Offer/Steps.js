import React from "react";
// import IconCloudDemo from "../AboutUs/IconCloudDemo";
import { CompareDemo } from "./Comparision";
import VideoDialog from "./VideoDialog";
import "./offer.css";

export function Steps() {
  return (
    <>
      <h1 className="responsive-compare-text">
        Student Before <span className="text-[#3A80F6]">/</span> After We guide
        them!
      </h1>
      <div className="responsive-container">
        <VideoDialog />
        <CompareDemo />
      </div>
    </>
  );
}
