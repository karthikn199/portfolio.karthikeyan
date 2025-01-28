import React from "react";
import "./BlogComponent.css"; // Import your CSS file for styling

const BlogComponent = ({ header, body, image }) => {
  return (
    <div className="blog-card AboutPage">
      <div className="blog-header">
        <img src={image} alt="Blog Header" className="blog-image" />
        <h2>{header}</h2>
      </div>
      <div className="blog-body">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default BlogComponent;
