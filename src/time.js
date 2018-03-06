export default new class {
  constructor() {
    this._currentTime = null;
    this._current = 0;
    this._stopped = true;
  }

  get current() {
    if (!this._stopped) {
      let difference = 0;
      difference = (Date.now() - this._currentTime) * 0.001;
      this._currentTime = Date.now();
      this._current += difference;
    }
    return this._current;
  }

  start() {
    this._currentTime = Date.now();
    this._stopped = false;
  }

  stop() {
    this._stopped = true;
  }

  reset() {
    this._current = 0;
  }
}();