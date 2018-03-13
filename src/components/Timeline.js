import React from 'react';

function clamp(floor, x, ciel) {
    if (0 <= x && x <= ciel) {
        return [x, 'red'];
    } else if (x < floor) {
        return [floor, '#304040'];
    } else if (x > ciel) {
        return [ciel, '#304040'];
    }
}

const BARS = new Array(100).fill(0);

/** 
 * This is a bar.
 */
class Bar extends React.Component {
    constructor() {
        super();
    }

    draw(canvas) {
        this.canvas = this.canvas || canvas;
        const ctx = this.canvas.getContext('2d');
        ctx.fillStyle = '#34444E';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        let sixtheenth = this.canvas.width / 16;
        for (let x = 0; x < 16; x++) {
            if (x === 0) {
                ctx.fillStyle = "orange";
                ctx.fillRect(sixtheenth * x, 0, 1, this.canvas.height);
            } else {
                ctx.fillStyle = "#304040";
                ctx.fillRect(sixtheenth * x, 0, 1, this.canvas.height);
            }
        }
    }

    render() {
        return (
            <canvas ref={this.draw.bind(this)}
                onClick={this.props.placeNote}
                width={this.props.width}
                height={this.props.height} />
        )
    }
}



class Timeline extends React.Component {

    constructor() {
        super();
        this.state = { ready: false };
    }

    setTimeline(node) {
        if (node !== null && typeof node !== 'undefined') {
            this.timeline = node;
        }
    }

    render() {

        // 115 bpm
        // 44 measure.
        // 16 slots per bar

        let bps = 115 / 60,
            height = 0, x = 0, color = 'green';
        const bars = 3;
        const bpm = 4;
        const barTime = 1 / bps * bpm;
        const end = barTime * bars

        if (typeof this.timeline !== 'undefined') {
            let rect = this.timeline.getClientRects()[0]
            let width = rect.width;
            x = this.props.time * width / end
        }

        if (this.props.time >= end) {
            this.props.resetPlayback();
        }

        return (
            <div ref={this.setTimeline.bind(this)} className="timeline">
                <div style={{
                    zIndex: 90,
                    position: 'absolute',
                    height: this.props.height,
                    background: 'red',
                    left: x,
                    width: '2px'
                }}></div>
                {BARS.slice(0, bars).map((_, i) => <Bar key={i} height={this.props.height} width={400} offset={i} />)}
            </div>
        );
    }
}

export default Timeline;