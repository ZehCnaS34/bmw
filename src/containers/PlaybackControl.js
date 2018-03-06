import { connect } from 'react-redux';
import { startTime, stopTime } from '../actions';
import PlaybackControl from '../components/PlaybackControl';

export default connect(
    ({ playback }) => {
        return { paused: playback.paused };
    },
    dispatch => ({
        stopTime: () => dispatch(stopTime()),
        startTime: () => dispatch(startTime())
    })
)(PlaybackControl)