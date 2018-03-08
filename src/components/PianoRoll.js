import React from 'react';
import './PlaybackControl.css';
import Timeline from '../containers/Timeline';
import VerticalKeyboard from '../containers/VerticalKeyboard';

const PlaybackControl = () => {
    return (
        <div className="piano-roll">
            <VerticalKeyboard onMetric={() => {}} />
            <Timeline offset={0} />
            <Timeline offset={1} />
            <Timeline offset={2} />
            <Timeline offset={3} />
        </div>
    );
}

export default PlaybackControl;