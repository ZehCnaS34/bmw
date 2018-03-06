import React from 'react';

class Timeline extends React.Component {

    constructor() {
        super();
        this.state = {ready: false};
    }

    draw(canvas) {
        this.canvas = canvas;
    }

    render() {
        if (typeof this.canvas !== 'undefined') {
            let x = (this.props.time / 60 * this.canvas.width) % this.canvas.width;
            const ctx = this.canvas.getContext('2d');
            ctx.fillStyle = '#34444E';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.fillStyle = 'white';
            ctx.fillRect(x, 0, 1, this.canvas.height);
        }
        return <canvas ref={this.draw.bind(this)} style={{ border: '1px solid black' }} />
    }
}

export default Timeline;