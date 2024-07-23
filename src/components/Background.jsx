import React from "react";
import { useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

function Background() {
  const { width, height } = useWindowSize();

  useEffect(() => {
    const video = document.getElementById("background-video");

    // Set the video dimensions based on the window size
    video.style.width = `${width}px`;
    video.style.height = `${height}px`;

    // Add a resize event listener to update the video dimensions on window resize
    const handleResize = () => {
      video.style.width = `${window.innerWidth}px`;
      video.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, height]);

  return (
    <div className="fixed -z-10 top-0 left-0 w-full h-full brightness-50 saturate-200 hue-rotate-180 overflow-hidden">
      <video
        id="background-video"
        className="object-cover w-full h-full"
        src="/infinity.mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}

export default Background;
