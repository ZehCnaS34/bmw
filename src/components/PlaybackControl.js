import React from 'react';
import './PlaybackControl.css';

const StepButton = ({ children, onMinus, onPlus }) => {
    return (
        <span>
            <button onClick={onMinus}>-</button>
            {children}
            <button onClick={onPlus}>+</button>
        </span>
    )
}

const PlaybackControl = ({ startTime, stopTime, paused, resetTime, octave, upOctave, downOctave }) => {
    return (
        <div className="playback-control">
            <div>
                <button
                    className={paused ? '' : 'active'}
                    onClick={paused ? startTime : stopTime}>{paused ? 'start' : 'pause'}</button>
                <button onClick={resetTime}>{paused ? 'reset' : 'stop'}</button>
                <StepButton onMinus={downOctave} onPlus={upOctave}>
                    {octave}
                </StepButton>
            </div>
        </div>
    );
}

export default PlaybackControl;