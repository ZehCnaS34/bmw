import React from 'react';
import './PlaybackControl.css';
import Timeline from '../containers/Timeline';
import VerticalKeyboard from '../containers/VerticalKeyboard';

const PlaybackControl = () => {
    return (
        <div className="piano-roll">
            <VerticalKeyboard onMetric={() => { }} />
            <div className="bars">
                <Timeline />
            </div>
        </div>
    );
}

export default PlaybackControl;