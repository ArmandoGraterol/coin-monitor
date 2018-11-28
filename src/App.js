import React, { Component } from 'react';

import History from './components/History';
import Today from './components/Today';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Coin Monitor</h1>
        <Today />
        <History />
      </div>
    );
  }
}

export default App;
