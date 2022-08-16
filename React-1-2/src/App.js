import React from 'react';

class App extends React.Component {
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  constructor(props) {
    super(props);
    // Define the state
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>
          {/* Display the value of state */}
          <button onClick={() => { this.handleClick() }}>
            +
          </button>

        </h1>
        {/* Add a <button> tag */}
        {this.state.count};

      </div>
    );
  }
}

export default App;
