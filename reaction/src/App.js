import React, { Component } from 'react';
import './App.css';


import App from './1-props';
// import App from './0-hello-world';

class Root extends Component {
  render() {
    return (
      <div className="App">
        <App />
      </div>
    );
  }
}

export default Root;
