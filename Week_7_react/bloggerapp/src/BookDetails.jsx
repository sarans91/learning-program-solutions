import React from 'react';
import { books } from './data'; // Import data

function BookDetails() {
  return (
    <div className="component-container">
      <h2>Book Details</h2>
      {books.map((book) => (
        <div key={book.id} className="item-card">
          <h3>{book.bname}</h3>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;