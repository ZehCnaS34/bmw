import { connect } from 'react-redux';
import { startTime, stopTime, resetTime, verticalKeyboardDownOctave, verticalKeyboardUpOctave } from '../actions';
import PlaybackControl from '../components/PlaybackControl';

export default connect(
    ({ playback, verticalKeyboard }) => {
        return { 
            paused: playback.paused,
            octave: verticalKeyboard.octave
        };
    },
    dispatch => ({
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