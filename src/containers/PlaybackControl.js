import { connect } from 'react-redux';
import { startTime, stopTime, resetTime, verticalKeyboardDownOctave, verticalKeyboardUpOctave, changeInstrument } from '../actions';
import PlaybackControl from '../components/PlaybackControl';

export default connect(
    ({ playback, verticalKeyboard }) => {
        return { 
            paused: playback.paused,
            octave: verticalKeyboard.octave
        };
    },
    dispatch => ({
        setSine: () => dispatch(changeInstrument("Sine")),
        setSawtooth: () => dispatch(changeInstrument("Sawtooth")),
        upOctave: () => dispatch(verticalKeyboardUpOctave()),
        downOctave: () => dispatch(verticalKeyboardDownOctave()),
        stopTime: () => dispatch(stopTime()),
        startTime: () => dispatch(startTime()),
        resetTime: () => {
            dispatch(stopTime());
            dispatch(resetTime());
        }
    })
)(PlaybackControl)