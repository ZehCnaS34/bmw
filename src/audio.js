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


class Instrument {
    constructor(ae) {
        this.audioEngine = ae;
        this.ctx = ae.ctx;

        this.displayName = null;
        this.sourceConstructor = null;
        this.channels = {};
    }

    get sources() {
        return Object.values(this.channels).map(({ source }) => source);
    }

    get name() {
        if (this.displayName === null) {
            throw ("Ther instrument does not have a name");
        }
        return this.displayName;
    }

    unMute(frequency) {
        if (!(frequency in this.channels)) {
            this.channels[frequency] = this.createChannel();
        }
        const channel = this.channels[frequency];
        channel.source.frequency.setValueAtTime(frequency, this.ctx.currentTime);
        channel.gain.gain.setTargetAtTime(0.5, this.ctx.currentTime, 0.015);
    }

    mute(frequency) {
        if (!(frequency in this.channels)) {
            this.channels[frequency] = this.createChannel();
        }
        const channel = this.channels[frequency];
        channel.gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.015);
    }

    createChannel(...args) {
        const { ctx } = this;
        window.chan = this;
        const channel = { source: this.sourceConstructor(), gain: ctx.createGain() };

        channel.source.connect(channel.gain);
        channel.gain.connect(this.ctx.destination);
        channel.gain.gain.setValueAtTime(0, this.ctx.currentTime);
        channel.source.start();
        return channel;
    }
}

class Sine extends Instrument {
    constructor(audioEngine) {
        super(audioEngine);
        this.displayName = "Sine";
        this.sourceConstructor = this.ctx.createOscillator.bind(this.ctx);
    }
}

class Sawtooth extends Instrument {
    constructor(audioEngine) {
        super(audioEngine);
        this.displayName = "Sawtooth";
        this.sourceConstructor = function () {
            let source = audioEngine.ctx.createOscillator()
            source.type = 'sawtooth';
            return source;
        }.bind(this.ctx);
    }
}

export class AudioEngine {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();

        this.frequencies = {}
        this.instruments = {};
        console.log('Engine Starting');
    }

    laodInstruments(...instruments) {
        for (let instrument of instruments) {
            let inst = new instrument(this);
            this.instruments[inst.name] = inst;
        }
    }

    setInstrument(instrumentName) {
    }


    getFreqency(note, level) {
        return FREQUENCIES(`${note.toUpperCase()}${level}`);
    }

    // change params to frequncy
    start(instrumentName, note, level) {
        // const frequency = this.getFreqency(note, level);
        this.getFreqency(note, level).then(frequency => {
            const instrument = this.instruments[instrumentName];
            instrument.unMute(frequency);
        });
    }

    // change params to frequncy
    stop(instrumentName, note, level) {
        this.getFreqency(note, level).then(frequency => {
            const instrument = this.instruments[instrumentName];
            instrument.mute(frequency)
        })
    }
}


const AUDIO_ENGINE = new AudioEngine();


AUDIO_ENGINE.laodInstruments(
    Sine,
    Sawtooth
)

window.AE = AUDIO_ENGINE;

export default AUDIO_ENGINE;