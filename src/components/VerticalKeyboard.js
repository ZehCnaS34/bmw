import React from 'react';
import './PlaybackControl.css';
import Timeline from '../containers/Timeline';


const Octave = ({ noteStart, noteEnd, level }) => {
    return (
        <div className="vk-octave">
            <div onMouseDown={() => noteStart('b', level)} onMouseUp={() => noteEnd('b', level)} className={`vko-note white`}></div>
            <div onMouseDown={() => noteStart('a#', level)} onMouseUp={() => noteEnd('a#', level)} className={`vko-note black`}></div>
            <div onMouseDown={() => noteStart('a', level)} onMouseUp={() => noteEnd('a', level)} className={`vko-note white`}></div>
            <div onMouseDown={() => noteStart('g#', level)} onMouseUp={() => noteEnd('g#', level)} className={`vko-note black`}></div>
            <div onMouseDown={() => noteStart('g', level)} onMouseUp={() => noteEnd('g', level)} className={`vko-note white`}></div>
            <div onMouseDown={() => noteStart('f#', level)} onMouseUp={() => noteEnd('f#', level)} className={`vko-note black`}></div>
            <div onMouseDown={() => noteStart('f', level)} onMouseUp={() => noteEnd('f', level)} className={`vko-note white`}></div>
            <div onMouseDown={() => noteStart('e', level)} onMouseUp={() => noteEnd('e', level)} className={`vko-note white`}></div>
            <div onMouseDown={() => noteStart('d#', level)} onMouseUp={() => noteEnd('d#', level)} className={`vko-note black`}></div>
            <div onMouseDown={() => noteStart('d', level)} onMouseUp={() => noteEnd('d', level)} className={`vko-note white`}></div>
            <div onMouseDown={() => noteStart('c#', level)} onMouseUp={() => noteEnd('c#', level)} className={`vko-note black`}></div>
            <div onMouseDown={() => noteStart('c', level)} onMouseUp={() => noteEnd('c', level)} className={`vko-note white`}></div>
        </div>
    )
}


class VerticalKeyboard extends React.Component {
    nodeReady(node) {
        if (typeof node === 'undefined') return;
        window.vk = node;
        const rect = node.getClientRects()[0];
        this.props.onReady(node.scrollHeight);
        node.focus();
    }

    handleKeyDown(e) {
        const { noteStart, noteEnd } = this.props;
        console.log(e.keyCode)
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
        console.log(e.keyCode);
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