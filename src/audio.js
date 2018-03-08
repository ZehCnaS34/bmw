
import notes from './data.csv';

function csvToMap(data) {
    return new Promise((fulfill, reject) => {
        let output = {};
        let keyVals = data.split('\n');
        for (let kv of keyVals) {
            let [k, v] = kv.split(',');
            output[k] = v;
        }
        fulfill(output);
    });
}

const FREQUENCIES = (() => {
    let data = null;
    return (tag) => {
        return new Promise((fulfill, reject) => {
            if (data === null) {
                fetch(notes)
                    .then(response => response.text())
                    .then(data => csvToMap(data))
                    .then(map => {
                        data = map
                        fulfill(data[tag])
                    })
            } else {
                // fulfill(data[tag])
                fulfill(data[tag])
            }
        });
    };
})();


export class AudioEngine {
    constructor() {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        this.createOscillator();
        console.log('Engine Starting');
    }

    createOscillator() {
        this.oscillator = this.audioCtx.createOscillator();

        this.oscillator.type = 'sine';
        this.oscillator.frequency.setValueAtTime(440, this.audioCtx.currentTime);
        this.oscillator.connect(this.audioCtx.destination);
    }

    getFreqency(note, level) {
        return FREQUENCIES(`${note.toUpperCase()}${level}`);
    }

    start(note, level) {
        // const frequency = this.getFreqency(note, level);
        this.getFreqency(note, level).then(frequency => {
            this.oscillator.start();
            this.oscillator.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);
            this.oscillator.onended = () => this.createOscillator();
        });
    }

    stop() {
        this.oscillator.stop();
    }
}


const AUDIO_ENGINE = new AudioEngine();
export default AUDIO_ENGINE;