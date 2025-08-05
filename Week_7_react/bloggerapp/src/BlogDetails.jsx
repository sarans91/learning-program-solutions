import React from 'react';
import { blogs } from './data'; // Import data

function BlogDetails() {
  return (
    <div className="component-container">
      <h2>Blog Details</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="item-card">
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;