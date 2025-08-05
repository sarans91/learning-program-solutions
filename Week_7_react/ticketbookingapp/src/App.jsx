import React from 'react';
import './App.css';

// --- Child Components ---

// Component for the logged-in user's view
function UserPage(props) {
  return (
    <div>
      <h1>Welcome back</h1>
      <p>You can now book your tickets!</p>
      <button className="action-button">Browse Flights</button>
    </div>
  );
}

// Component for the guest user's view
function GuestPage(props) {
  return (
    <div>
      <h1>Please sign up.</h1>
      <p>Sign up to book tickets and manage your flights.</p>
      <div className='flight-details'>
        <h3>Available Flights</h3>
        <p>Chennai to Bengaluru - 9:30 AM</p>
        <p>Bengaluru to Mumbai - 1:45 PM</p>
      </div>
    </div>
  );
}

// Button to handle logging in
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Button to handle logging out
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}


// --- Parent Component ---

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    // Set the initial state
    this.state = { isLoggedIn: false };
  }

  // Event handlers to update the state
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button; // This is an element variable
    let page;

    // This is the core of conditional rendering.
    // We decide which components to display based on the `isLoggedIn` state.
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
      page = <UserPage />; // Display User page if logged in [cite: 16]
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
      page = <GuestPage />; // Display Guest page if logged out [cite: 17]
    }

    return (
      <div className="container">
        {page}   {/* Render the appropriate page */}
        {button} {/* Render the appropriate button */}
      </div>
    );
  }
}

export default App;