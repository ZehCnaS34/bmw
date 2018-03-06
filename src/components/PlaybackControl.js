import React from 'react';
import './PlaybackControl.css';
import { PassThrough } from 'stream';

const PlaybackControl = ({ startTime, stopTime, paused, resetTime }) => {
    return (
        <div className="playback-control">
            <div>
                <button
                    className={paused ? '' : 'active'}
                    onClick={paused ? startTime : stopTime}>{paused ? 'start' : 'pause'}</button>
                <button onClick={resetTime}>stop</button>
            </div>
        </div>
    );
}

export default PlaybackControl;