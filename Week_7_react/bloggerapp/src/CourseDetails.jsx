
import React from 'react';
import { courses } from './data'; // Import data

function CourseDetails() {
  return (
    <div className="component-container">
      <h2>Course Details</h2>
      {courses.map((course) => (
        // Keys are crucial for React to identify each list item [cite: 31]
        <div key={course.id} className="item-card">
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;