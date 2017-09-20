import React, { Component } from 'react';

class Unidirectional extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Hack Reactor'
    }
  }

  onSubmit(value) {
    console.log('Submit', value)
    this.setState({value: ''})
  }

  render() {
    return (
      <div className="App">
          <form onSubmit={
            (e) => {
              e.preventDefault()
              e.stopPropagation()
              this.onSubmit(this.state.value)
              return false
            }
          }>
          <input onChange={(e) => this.setState({ value: e.target.value })} value={this.props.state.value} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Unidirectional />
    );
  }
}

export default App;
