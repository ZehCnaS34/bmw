import { connect } from 'react-redux';
import { noteStart, noteEnd } from '../actions';
import VerticalKeyboard from '../components/VerticalKeyboard';

export default connect(
    state => ({
    }),
    dispatch => ({
        noteStart(note, level) { 
            console.log('start', note, level);
            dispatch(noteStart(note, level));
        },
        noteEnd(note, level) {
            console.log('end', note, level)
            dispatch(noteEnd(note, level));
        }
    })
)(VerticalKeyboard)