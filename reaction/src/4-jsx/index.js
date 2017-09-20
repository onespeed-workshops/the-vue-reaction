import React, { Component } from 'react';


class ItsJustJavaScript extends Component {
  render() {
    const state = {
      frameworks: [
        'vue',
        'react',
        'angular',
        'hyperHTML',
      ],
      loading: true
    }
    return (
      <div className="App">
        <ul>
          {state.frameworks.map(framework => (
            <li>{framework}</li>
          )})}
        </ul>

        { state.loading ? (
            <div>Loading</div>
          ) : (
            <div>Welcome</div>
        )}

        <form onSubmit={
          (e) => {
            e.preventDefault()
            e.stopPropagation()
            console.log('Submit')
            return false
          }
        }>
          <input />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <ItsJustJavaScript />
    );
  }
}

export default App;
