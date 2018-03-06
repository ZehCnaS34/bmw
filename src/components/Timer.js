import React from 'react';
// import PropTypes from 'prop-types';

class Timer extends React.Component {

    componentDidMount() {
        // if (!this.props.paused) {
        //     this.loop = setInterval(this.props.onUpdate, 10);
        // }
    }

    componentWillUnmount() {
        // clearInterval(this.loop);
    }

    render() {
        const { minutes, seconds, milliseconds } = this.props;
        return (
            <div>
                <span>{minutes.toString()}</span>:
                <span>{seconds.toString().padStart(2, '0')}</span>:
                <span>{milliseconds.toString().padStart(2, '0')}</span>
            </div>
        );
    }
}

export default Timer;