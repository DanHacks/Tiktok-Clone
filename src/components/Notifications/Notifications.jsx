import React from "react";
import "./Notifications.css";

function Notifications() {
  const notifications = [
    "Moses liked your video.",
    "Judas commented on your post.",
    "Mary followed you.",
    "Lucy shared your video.",
    "Paul tweeted about your work.",
    "David commented on your post.",
    "Olivia liked your video.",
    "Sophia commented on your post.",
    "Emily liked your video.",
    "Chloe commented on your post.",
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
