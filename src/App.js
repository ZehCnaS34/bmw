import React, { Component } from 'react';
import "./App.css";

import Timer from './containers/Timer';
import PlaybackControl from './containers/PlaybackControl';
import PianoRoll from './containers/PianoRoll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <PlaybackControl />
        <PianoRoll />
      </div>
    );
  }
}

export default App;
