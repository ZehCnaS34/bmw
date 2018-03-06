import { connect } from 'react-redux';
import { startTime, stopTime, resetTime } from '../actions';
import PlaybackControl from '../components/PlaybackControl';

export default connect(
    ({ playback }) => {
        return { paused: playback.paused };
    },
    dispatch => ({
        stopTime: () => dispatch(stopTime()),
        startTime: () => dispatch(startTime()),
        resetTime: () => dispatch(resetTime())
    })
)(PlaybackControl)