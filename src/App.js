import React, { Component } from 'react';

import Timer from './containers/Timer';
import PlaybackControl from './containers/PlaybackControl';
import Timeline from './containers/Timeline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <PlaybackControl />
        {
          (new Array(6).fill(0)).map((_, i) => <Timeline offset={i} />)
        }
      </div>
    );
  }
}

export default App;
