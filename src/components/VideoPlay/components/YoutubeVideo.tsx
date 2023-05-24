import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const YoutubeVideo = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const link = "https://www.youtube.com/watch?v=7xCe2m0kiSg";
  const opts: YouTubeProps["opts"] = {
    height: "600px",
    width: "100%",
    playerVars: {
      link,
      autoplay: 2,
    },
  };

  return <YouTube videoId="PJt7VJLJWyI" opts={opts} onReady={onPlayerReady} />;
};
export default YoutubeVideo;
