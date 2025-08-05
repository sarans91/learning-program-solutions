import React from 'react';
import CurrencyConvertor from './CurrencyConvertor'; // Import the new component
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    // Bind event handlers to make 'this' work in the callback
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleSyntheticEvent = this.handleSyntheticEvent.bind(this);
  }

  // Task: "Increase" button should invoke multiple methods [cite: 19]
  handleIncrement() {
    this.incrementCounter();
    this.sayHello();
  }

  // Method to increment the value [cite: 20]
  incrementCounter() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  // Method to say hello with a static message [cite: 21]
  sayHello() {
    alert("Hello! The counter has been increased.");
  }

  // Method for the "Decrement" button [cite: 18]
  handleDecrement() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  // Method that takes an argument [cite: 22]
  sayMessage(message) {
    alert(message);
  }

  // Method for the synthetic event button [cite: 9, 23]
  handleSyntheticEvent(event) {
    console.log(event); // The synthetic event object
    alert("I was clicked");
  }

  render() {
    return (
      <div className="App">
        <h1>React Event Handling Examples</h1>

        {/* Counter Component */}
        <div className="component-container">
          <h2>Counter</h2>
          <h3>Value: {this.state.counter}</h3>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>

        {/* Argument Passing & Synthetic Event */}
        <div className="component-container">
          <h2>Other Events</h2>
          {/* Using an arrow function to pass arguments */}
          <button onClick={() => this.sayMessage('welcome')}>Say Welcome</button>
          <button onClick={this.handleSyntheticEvent}>Synthetic Event Click</button>
        </div>
        
        {/* Currency Converter Component  */}
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;