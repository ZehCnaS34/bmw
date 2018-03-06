import TIME from '../time';
import { combineReducers } from 'redux';

const playbackInitalState = {
    time: 0,
    paused: true
}

function playback(state = playbackInitalState, action) {
    switch (action.type) {
        case 'START_TIME':
            TIME.start();
            return {...state, time: TIME.current, paused: false};
        case 'RESET_TIME':
            TIME.reset();
            return {...state, time: TIME.current};
        case 'STOP_TIME':
            TIME.stop();
            return {...state, time: TIME.current, paused: true};
        case 'TICK_TIME':
            return {...state, time: TIME.current, paused: false};
        default:
            return state;
    }
}

export default combineReducers({
    playback
})