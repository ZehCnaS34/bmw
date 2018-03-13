import React from 'react';
import './PlaybackControl.css';
import Timeline from '../containers/Timeline';


class Octave extends React.Component {
    constructor(props) {
        super(props);
        this.mouseDown = false;
    }

    clickStart(note, octave) {
        return () => {
            this.mouseDown = true
            this.props.noteStart(note, octave);
        }
    }

    clickEnd(note, octave) {
        return () => {
            this.mouseDown = false;
            this.props.noteEnd(note, octave);
        }
    }

    overStart(note, octave) {
        return () => {
            if (this.mouseDown) {
                this.props.noteStart(note, octave);
            }
        }
    }

    overEnd(note, octave) {
        return () => {
            if (this.mouseDown) {
                this.props.noteEnd(note, octave);
            }
        }
    }

    render() {
        const { noteStart, noteEnd, level } = this.props;
        return (
            <div className="vk-octave">
                <div onMouseEnter={this.overStart('b', level)}  onMouseLeave={this.overEnd('b', level)}   onMouseDown={this.clickStart('b', level)}  onMouseUp={this.clickEnd('b', level)} className={`vko-note white`}></div>
                <div onMouseEnter={this.overStart('a#', level)} onMouseLeave={this.overEnd('a#', level)} onMouseDown={this.clickStart('a#', level)} onMouseUp={this.clickEnd('a#', level)} className={`vko-note black`}></div>
                <div onMouseEnter={this.overStart('a', level)}  onMouseLeave={this.overEnd('a', level)}   onMouseDown={this.clickStart('a', level)}  onMouseUp={this.clickEnd('a', level)} className={`vko-note white`}></div>
                <div onMouseEnter={this.overStart('g#', level)} onMouseLeave={this.overEnd('g#', level)} onMouseDown={this.clickStart('g#', level)} onMouseUp={this.clickEnd('g#', level)} className={`vko-note black`}></div>
                <div onMouseEnter={this.overStart('g', level)}  onMouseLeave={this.overEnd('g', level)}   onMouseDown={this.clickStart('g', level)}  onMouseUp={this.clickEnd('g', level)} className={`vko-note white`}></div>
                <div onMouseEnter={this.overStart('f#', level)} onMouseLeave={this.overEnd('f#', level)} onMouseDown={this.clickStart('f#', level)} onMouseUp={this.clickEnd('f#', level)} className={`vko-note black`}></div>
                <div onMouseEnter={this.overStart('f', level)}  onMouseLeave={this.overEnd('f', level)}   onMouseDown={this.clickStart('f', level)}  onMouseUp={this.clickEnd('f', level)} className={`vko-note white`}></div>
                <div onMouseEnter={this.overStart('e', level)}  onMouseLeave={this.overEnd('e', level)}   onMouseDown={this.clickStart('e', level)}  onMouseUp={this.clickEnd('e', level)} className={`vko-note white`}></div>
                <div onMouseEnter={this.overStart('d#', level)} onMouseLeave={this.overEnd('d#', level)} onMouseDown={this.clickStart('d#', level)} onMouseUp={this.clickEnd('d#', level)} className={`vko-note black`}></div>
                <div onMouseEnter={this.overStart('d', level)}  onMouseLeave={this.overEnd('d', level)}   onMouseDown={this.clickStart('d', level)}  onMouseUp={this.clickEnd('d', level)} className={`vko-note white`}></div>
                <div onMouseEnter={this.overStart('c#', level)} onMouseLeave={this.overEnd('c#', level)} onMouseDown={this.clickStart('c#', level)} onMouseUp={this.clickEnd('c#', level)} className={`vko-note black`}></div>
                <div onMouseEnter={this.overStart('c', level)}  onMouseLeave={this.overEnd('c', level)}   onMouseDown={this.clickStart('c', level)}  onMouseUp={this.clickEnd('c', level)} className={`vko-note white`}></div>
            </div>
        )
    }
}


class VerticalKeyboard extends React.Component {
    nodeReady(node) {
        if (typeof node !== 'undefined' && node !== null) {
            this.keyboard = node;
        }
        const rect = this.keyboard.getClientRects()[0];
        this.props.onReady(this.keyboard.scrollHeight);
        this.keyboard.focus();
    }

    handleKeyDown(e) {
        const { noteStart, noteEnd } = this.props;
        switch (e.keyCode) {
            case 81: // a
                noteStart('C', this.props.octave)
                break;
            case 50: // a
                noteStart('C#', this.props.octave)
                break;
            case 87: // a
                noteStart('D', this.props.octave)
                break;
            case 51: // a
                noteStart('D#', this.props.octave)
                break;
            case 69: // a
                noteStart('E', this.props.octave)
                break;

            case 82: // a
                noteStart('F', this.props.octave)
                break;
            case 53: // a
                noteStart('F#', this.props.octave)
                break;
            case 84: // a
                noteStart('G', this.props.octave)
                break;
            case 54: // a
                noteStart('G#', this.props.octave)
                break;
            case 89: // a
                noteStart('A', this.props.octave)
                break;
            case 55: // a
                noteStart('A#', this.props.octave)
                break;
            case 85: // a
                noteStart('B', this.props.octave)
                break;
        }
    }

    handleKeyUp(e) {
        const { noteStart, noteEnd } = this.props;
        switch (e.keyCode) {
            case 81: // a
                noteEnd('C', this.props.octave)
                break;
            case 50: // a
                noteEnd('C#', this.props.octave)
                break;
            case 87: // a
                noteEnd('D', this.props.octave)
                break;
            case 51: // a
                noteEnd('D#', this.props.octave)
                break;
            case 69: // a
                noteEnd('E', this.props.octave)
                break;

            case 82:
                noteEnd('F', this.props.octave);
                break;
            case 53:
                noteEnd('F#', this.props.octave);
                break;
            case 84: // a
                noteEnd('G', this.props.octave)
                break;
            case 54: // a
                noteEnd('G#', this.props.octave)
                break;
            case 89: // a
                noteEnd('A', this.props.octave)
                break;
            case 55: // a
                noteEnd('A#', this.props.octave)
                break;
            case 85: // a
                noteEnd('B', this.props.octave)
                break;
        }
    }

    render() {
        const { noteStart, noteEnd } = this.props;
        return (
            <div tabIndex={0} onKeyDown={this.handleKeyDown.bind(this)} onKeyUp={this.handleKeyUp.bind(this)} className="vertical-keyboard" ref={this.nodeReady.bind(this)} >
                <Octave noteStart={noteStart} noteEnd={noteEnd} level={7} />
                <Octave noteStart={noteStart} noteEnd={noteEnd} level={6} />
                <Octave noteStart={noteStart} noteEnd={noteEnd} level={5} />
                <Octave noteStart={noteStart} noteEnd={noteEnd} level={4} />
                <Octave noteStart={noteStart} noteEnd={noteEnd} level={3} />
                <Octave noteStart={noteStart} noteEnd={noteEnd} level={2} />
                <Octave noteStart={noteStart} noteEnd={noteEnd} level={1} />
            </div>
        );
    }
}

export default VerticalKeyboard;