import React from 'react';
import './App.css';

// You can find your own image and place it in the src folder or use a URL.
// import officeImage from './office-space.jpg'; // Example of a local image
const imageUrl = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80";


function App() {
  // 1. Create a variable for the page heading element 
  const pageTitle = "Office Space";

  // 2. Create a list of objects to hold office space data 
  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "WeWork",
      Rent: 75000,
      Address: "Bengaluru"
    },
     {
      Name: "Co-Hive",
      Rent: 60000,
      Address: "Mumbai"
    }
  ];

  return (
    <div className="App">
      {/* 3. Display the page heading */}
      <h1>{pageTitle}, at Affordable Range</h1>

      {/* 4. Loop through the list to display each office */}
      {officeList.map((office, index) => {
        
        // 5. Logic to apply CSS color based on rent value [cite: 24]
        const rentStyle = {
          color: office.Rent <= 60000 ? 'red' : 'green',
          fontWeight: 'bold'
        };

        return (
          // Use a 'key' for each item in a list for React's performance
          <div key={index} className="office-card">
            
            {/* 6. Display the image using JSX attributes  */}
            <img src={imageUrl} width="35%" alt="Modern Office Space"/>
            
            {/* 7. Display the details from the office object */}
            <h2>Name: {office.Name}</h2>
            
            {/* 8. Apply the inline style to the rent element [cite: 8, 11] */}
            <h3 style={rentStyle}>Rent: Rs. {office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;