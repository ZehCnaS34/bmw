import { connect } from 'react-redux';
import { noteStart, noteEnd } from '../actions';
import VerticalKeyboard from '../components/VerticalKeyboard';

export default connect(
    state => ({
        octave: state.verticalKeyboard.octave
    }),
    dispatch => ({
        noteStart(note, level) { 
            dispatch(noteStart(note, level));
        },
        noteEnd(note, level) {
            dispatch(noteEnd(note, level));
        }
    })
)(VerticalKeyboard)