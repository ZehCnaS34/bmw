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


const VerticalKeyboard = ({noteStart, noteEnd}) => {
    return (
        <div className="vertical-keyboard">
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

export default VerticalKeyboard;