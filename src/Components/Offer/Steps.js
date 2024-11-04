import React from "react";
// import IconCloudDemo from "../AboutUs/IconCloudDemo";
import { CompareDemo } from "./Comparision";
import VideoDialog from "./VideoDialog";

export function Steps() {
    return (
        (
            <>
            <h1
            style={{
                fontWeight: 'bold', // Set font weight to bold
              }} 
                className=" text-[4.5rem] mt-[10rem]">Student Before <span className="text-[#3A80F6]">/</span> After We guide them!</h1>
            <div            
             className="flex justify-items-center items-center justify-evenly		 h-[100vh]">              
                <VideoDialog/>            
            <CompareDemo />            
            </div>
            </>
        )
    );
}
