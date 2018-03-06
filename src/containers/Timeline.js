import { connect } from 'react-redux';
// import { tickTime, startTime } from '../actions';
import Timeline from '../components/Timeline';

export default connect(
    ({ playback }) => {
        return { time: playback.time, paused: playback.paused };
    },
    dispatch => ({})
)(Timeline)