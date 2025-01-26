import React from "react";
import "./VideoCard.css";

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <video className="video-player" controls src={video.url || "https://video-cdn.youversionapi.com/25559/en/high.webm"}></video>
      <div className="video-actions">
        <button>❤️ {video.likes}</button>
        <button>💬 {video.comments}</button>
      </div>
    </div>
  );
}

export default VideoCard;
