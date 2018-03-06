import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timer from './containers/Timer';

// const T = connect(mapStateToProps, mapDispatchToProps)(TT);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer/>
        {/* <PlayControl /> */}
        {/* <ChannelRack /> */}
      </div>
    );
  }
}

export default App;
