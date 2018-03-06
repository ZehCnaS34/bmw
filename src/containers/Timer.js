import { connect } from 'react-redux';
import { tickTime, startTime } from '../actions';
import Timer from '../components/Timer';


const getTime = (playbackTime, filter) => {
    switch (filter) {
        default: return playbackTime
    }
}

export default connect(
    ({playback}) => {
        let frac = playback.time / 60, minutes, seconds, milliseconds;
        minutes = parseInt(frac, 10);
        seconds = ((frac - minutes) * 60)
        let tmp = parseInt(seconds, 10);
        milliseconds = parseInt((seconds - tmp) * 100, 10);
        seconds = tmp;
        return { minutes, seconds, milliseconds, paused: playback.paused };
    },
    dispatch => ({
        onUpdate: () => dispatch(tickTime()),
        startTime: () => dispatch(startTime())
    })
)(Timer)