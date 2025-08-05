import React from 'react';

// We'll assume a static conversion rate for this example.
const EURO_PER_RUPEE = 0.011; // 1 INR = 0.011 EUR

class CurrencyConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: 0,
    };
    // Bind the event handlers to 'this'
    this.handleRupeeChange = this.handleRupeeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRupeeChange(event) {
    this.setState({ rupees: event.target.value });
  }

  // This event handler performs the conversion
  handleSubmit(event) {
    event.preventDefault(); // Prevents form submission from reloading the page
    const rupeesValue = parseFloat(this.state.rupees);
    if (!isNaN(rupeesValue)) {
      const convertedEuros = rupeesValue * EURO_PER_RUPEE;
      this.setState({ euros: convertedEuros.toFixed(2) }); // toFixed for clean output
    } else {
      this.setState({ euros: 0 });
    }
  }

  render() {
    return (
      <div className="component-container">
        <h2>Currency Converter</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Indian Rupees (INR):
            <input type="number" value={this.state.rupees} onChange={this.handleRupeeChange} />
          </label>
          <button type="submit">Convert</button>
        </form>
        <h3>Converted Amount: €{this.state.euros}</h3>
      </div>
    );
  }
}

export default CurrencyConvertor;