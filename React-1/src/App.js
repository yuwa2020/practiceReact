import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Define the state
    this.state = { name: "Ken the Ninja" };

  }
  handleClick(name) {
    this.setState({ name: name });
  }
  render() {
    //Javascript
    const name = "Ken the Ninja";
    const imgUrl = 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/kentheninja.png';
    return (
      //JSX
      <div>
        <h1>Hello.{this.state.name}!</h1>
        <p>Let's study React together!</p>
        <img src={imgUrl} />
        {/* <button onClick={() => { this.setState({ name: "Master Wooly" }) }}>Master Wooly</button>
        <button onClick={() => { this.setState({ name: 'Ken the Ninja' }) }}>Ken the Ninja</button> */}
        <button onClick={() => { this.handleClick('Master Wooly') }}>Master Wooly</button>
        <button onClick={() => { this.handleClick('Ken the Ninja') }}>Ken the Ninja</button>
      </div>

    );
  }
}

export default App;
