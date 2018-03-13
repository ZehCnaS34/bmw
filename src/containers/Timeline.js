import { connect } from 'react-redux';
import { resetTime } from '../actions';
import Timeline from '../components/Timeline';

export default connect(
    ({ playback }) => {
        return { time: playback.time, paused: playback.paused };
    },
    dispatch => ({
        placeNote(notePayload) {
            console.log('hm')
        },
        resetPlayback() {
            dispatch(resetTime())
        }
    })
)(Timeline)