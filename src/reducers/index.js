import TIME from '../time';
import AUDIO_ENGINE from '../audio';
import { combineReducers } from 'redux';
import { Map } from 'immutable';

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

function audio(state = Map(), action) {
    switch (action.type) {
        case 'AUDIO_START':
            AUDIO_ENGINE.start(action.note, action.level);
            return state.set(action.note, action.level);
        case 'AUDIO_END':
            AUDIO_ENGINE.stop(action.note);
            return state.remove(action.note);
        default:
            return state;
    }

    return state;
}

export default combineReducers({
    playback,
    audio
})