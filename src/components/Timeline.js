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

/** 
 * This is a bar.
 */
class Timeline extends React.Component {

    constructor() {
        super();
        this.state = { ready: false };
    }

    draw(canvas) {
        this.canvas = this.canvas || canvas;
        const ctx = this.canvas.getContext('2d');
        ctx.fillStyle = '#34444E';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        let sixtheenth = this.canvas.width / 16;
        ctx.fillStyle = "#304040";
        for (let x = 0; x < 16; x++) {
            ctx.fillRect(sixtheenth * x, 0, 1, this.canvas.height);
        }
    }

    render() {
        // 115 bpm
        // 44 measure.
        // 16 slots per bar
        let bps = 115 / 60,
            height = 0, x = 0, color = 'green';
        if (typeof this.canvas !== 'undefined') {
            // x = this.props.time / bps * this.canvas.height - bps * this.props.offset * this.canvas.height;
            x = (this.props.time - bps * this.props.offset) * this.canvas.width / bps
            height = this.canvas.height;
            [x, color] = clamp(0, x, this.canvas.width);
        }
        return (
            <div style={{ display: 'inline-block', position: 'relative', border: '1px solid #4C555A' }}>
                <div style={{
                    position: 'absolute',
                    height: height,
                    background: color,
                    left: x,
                    width: '2px'
                }}></div>
                <canvas ref={this.draw.bind(this)}
                    onClick={this.props.placeNote}
                    width={100}
                    height={260} />
            </div>
        )
    }
}

export default Timeline;