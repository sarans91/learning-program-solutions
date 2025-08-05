import React, { useState } from 'react';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import './App.css';

function App() {
  // State to control the visibility of each component
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div>
      <div className="controls">
        <h3>Toggle Components</h3>
        <button onClick={() => setShowCourses(!showCourses)}>
          {showCourses ? 'Hide' : 'Show'} Courses
        </button>
        <button onClick={() => setShowBooks(!showBooks)}>
          {showBooks ? 'Hide' : 'Show'} Books
        </button>
        <button onClick={() => setShowBlogs(!showBlogs)}>
          {showBlogs ? 'Hide' : 'Show'} Blogs
        </button>
      </div>

      <div className="app-container">
        {/* Method 1: Ternary operator for conditional rendering */}
        {showCourses ? <CourseDetails /> : <div className="component-placeholder">Courses Hidden</div>}

        {/* Method 2: Logical && for conditional rendering */}
        {showBooks && <BookDetails />}
        
        {showBlogs && <BlogDetails />}
      </div>
    </div>
  );
}

export default App;