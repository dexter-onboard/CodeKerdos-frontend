import HeroVideoDialog from "../ui/hero-video-dialog";

export default function VideoDialog() {
  const videoId = "ycPr5-27vSI"; // Extracted video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // YouTube Thumbnail URL
  const videoSrc = `https://www.youtube.com/embed/${videoId}`; // Correct Embed URL

  return (
    <div className="relative video-container">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc={videoSrc} // Use the correct embed videoSrc
        thumbnailSrc={thumbnailUrl} // Use the correct thumbnail URL
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc={videoSrc} // Use the correct embed videoSrc
        thumbnailSrc={thumbnailUrl} // Use the correct thumbnail URL
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
