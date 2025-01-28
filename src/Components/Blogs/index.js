import React from "react";
import BlogComponent from "./BlogComp";

const Blog = () => {
  return (
    <div>
      {/* <NpmPackage /> */}

      <BlogComponent
        header="Sample Blog Title"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut gravida purus."
        image="https://example.com/blog-image.jpg"
      />
    </div>
  );
};

export default Blog;
