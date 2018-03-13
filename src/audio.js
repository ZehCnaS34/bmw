// import { Map } from 'immutable';
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

        this.frequencies = {}
        window.frequencies = this.frequencies;
        console.log('Engine Starting');
    }

    setInstrument(instrument) {
    }

    createOscillator(frequency = 440) {
        const { ctx } = this;
        this.frequencies[frequency] = { oscillator: ctx.createOscillator(), gain: ctx.createGain() }

        window.frequencies = this.frequencies;
        const { oscillator, gain } = this.frequencies[frequency];
        oscillator.connect(gain);
        gain.connect(this.ctx.destination);
        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
        oscillator.start();
        // instrument type?
        oscillator.type = 'sawtooth';
        // this.oscillator.frequency.setValueAtTime(frequency, this.ctx.currentTime);
        // this.gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
        // this.oscillator.connect(this.gainNode);
    }

    getFreqency(note, level) {
        return FREQUENCIES(`${note.toUpperCase()}${level}`);
    }

    // change params to frequncy
    start(note, level) {
        // const frequency = this.getFreqency(note, level);
        this.getFreqency(note, level).then(frequency => {
            if (!(frequency in this.frequencies)) {
                console.log('creating oscillator')
                this.createOscillator(frequency);
            }

            const payload = this.frequencies[frequency];
            console.log(payload)

            // this.oscillator.start();
            payload.gain.gain.setTargetAtTime(0.5, this.ctx.currentTime, 0.015);
            payload.oscillator.frequency.setValueAtTime(frequency, this.ctx.currentTime);
            payload.oscillator.onended = () => this.createOscillator(frequency);
        });
    }

    // change params to frequncy
    stop(note, level) {
        this.getFreqency(note, level).then(frequency => {
            if (!(frequency in this.frequencies)) return;
            const { gain } = this.frequencies[frequency];
            console.log(gain)
            gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.015);
        })
        // this.oscillator.stop();
    }
}


const AUDIO_ENGINE = new AudioEngine();
export default AUDIO_ENGINE;