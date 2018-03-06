import React from 'react';
import './Timer.css';

const Timer = ({ minutes, seconds, milliseconds, paused }) => {
    return (
        <div className="timer">
            <div>
                <span className="wide-pad">{minutes.toString()}</span>:
                <span>{seconds.toString().padStart(2, '0')}</span>:
                <small><span>{milliseconds.toString().padStart(2, '0')}</span></small>
            </div>
        </div>
    );
}

export default Timer;