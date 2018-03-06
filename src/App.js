import React, { Component } from 'react';

import Timer from './containers/Timer';
import PlaybackControl from './containers/PlaybackControl';
import Timeline from './containers/Timeline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer/>
        <Timer/>
        <Timer/>
        <Timer/>
        <PlaybackControl />
        <PlaybackControl />
        <Timeline />
        <Timeline />
        <Timeline />
        <Timeline />
        <Timeline />
      </div>
    );
  }
}

export default App;
