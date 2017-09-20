import React, { Component } from 'react';

class Child extends Component {
  render() {
    const props = this.props
    return (
      <div className="App">
        <p className="App-intro">
          Hello { props.yourText } Meetup from props
        </p>
      </div>
    );
  }
}

class Parent extends Component {
  render() {
    const state = {
      value: 'Vue'
    }
    return (
      <div className="App">
        <Child yourText={state.value}/>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Parent />
    );
  }
}

export default App;
