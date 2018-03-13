import { connect } from 'react-redux';
import { updatePianoRollHeight, resetTime } from '../actions';
import PianoRoll from '../components/PianoRoll';

export default connect(
    store => ({
        height: store.pianoRoll.height
    }),
    dispatch => ({
        updateHeight(height) {
            dispatch(updatePianoRollHeight(height))
        }
    })
)(PianoRoll)