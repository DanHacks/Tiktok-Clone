import React from "react";
import "./CommentsPanel.css";

function CommentsPanel() {
  return (
    <div className="comments-panel">
      <h3>Comments</h3>
      <input type="text" placeholder="Add a comment..." />
    </div>
  );
}

export default CommentsPanel;
