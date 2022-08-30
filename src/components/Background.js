import backgroundVideo from "../video/background.mp4";
import "./Background.css";
import React, { useEffect, useRef } from "react";

export function Background() {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <div className="background">
      <video ref={videoRef} autoPlay loop muted playsInline controls="false">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}
