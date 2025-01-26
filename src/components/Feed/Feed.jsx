import React from "react";
import VideoCard from "./VideoCard";
import "./Feed.css";

function Feed() {
  const videos = [
    { id: 1, url: "https://www.example.com/video1.mp4", likes: 200, comments: 45 },
    { id: 2, url: "https://www.example.com/video2.mp4", likes: 150, comments: 30 },
  ];

  return (
    <div className="feed">
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
