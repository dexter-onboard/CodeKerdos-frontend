import React from "react";
import HeroVideoDialog from "./HeroVideoDialog";
import "./About.css";

const VideoDialog = () => {
  const videoId = "sfiRrl52ngU";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  // const videoSrc = `https://youtu.be/sfiRrl52ngU`;

  return (
    <div className="relative video-container">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        // videoSrc={videoSrc}
        thumbnailSrc={thumbnailUrl}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        // videoSrc={videoSrc}
        thumbnailSrc={thumbnailUrl}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
};

export default VideoDialog;
