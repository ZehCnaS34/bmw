
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
                    .catch(reason => console.warn(reason));
            } else {
                fulfill(data[tag]);
            }
        });
    };
})();


export class AudioEngine {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();

        this.createOscillator();
        this.oscillator.start();
        console.log('Engine Starting');
    }

    setInstrument(instrument) {
    }

    createOscillator(frequency = 440) {
        this.oscillator = this.ctx.createOscillator();
        this.gainNode = this.ctx.createGain();
        this.oscillator.type = 'sine';
        this.oscillator.frequency.setValueAtTime(frequency, this.ctx.currentTime);
        this.gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
        this.oscillator.connect(this.gainNode);
        this.gainNode.connect(this.ctx.destination);
    }

    getFreqency(note, level) {
        return FREQUENCIES(`${note.toUpperCase()}${level}`);
    }

    // change params to frequncy
    start(note, level) {
        // const frequency = this.getFreqency(note, level);
        this.getFreqency(note, level).then(frequency => {
            // this.oscillator.start();
            this.gainNode.gain.setTargetAtTime(0.5, this.ctx.currentTime, 0.10);
            // this.gainNode.gain.value = 0.5;
            this.oscillator.frequency.setValueAtTime(frequency, this.ctx.currentTime);
            this.oscillator.onended = () => this.createOscillator(frequency);
        });
    }

    // change params to frequncy
    stop() {
        this.gainNode.gain.setTargetAtTime(0, this.ctx.currentTime, 0.015);
        // this.oscillator.stop();
    }
}


const AUDIO_ENGINE = new AudioEngine();
export default AUDIO_ENGINE;