import React, { Component } from 'react';


class Stylin extends Component {
  render() {
    const CSSinJS = {
      backgroundColor: 'red'
    }
    return (
      <div className="App">
        <div style={ CSSinJS }>
          red
        </div>
        <div className="blue">
          blue
        </div>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Stylin />
    );
  }
}

export default App;
