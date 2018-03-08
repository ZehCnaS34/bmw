import React from 'react';
import './PlaybackControl.css';
import Timeline from '../containers/Timeline';
import VerticalKeyboard from '../containers/VerticalKeyboard';

const PianoRoll = ({updateHeight, height}) => {
    return (
        <div className="piano-roll">
            <VerticalKeyboard onReady={updateHeight} />
            <div className="bars">
                <Timeline height={height} />
            </div>
        </div>
    );
}

export default PianoRoll;