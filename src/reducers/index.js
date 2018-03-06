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
            break;
        case 'RESET_TIME':
            TIME.reset();
            break;
        case 'STOP_TIME':
            TIME.stop();
            break;
        case 'TICK_TIME':
        default:
            return {...state, time: TIME.current};
    }
    return state;
}

export default combineReducers({
    playback
})