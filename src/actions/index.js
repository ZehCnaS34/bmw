
let timer = null;

export const tickTime = () => ({
    type: 'TICK_TIME'
})

export const startTime = () => dispatch => {
    clearInterval(timer);
    timer = setInterval(() => dispatch(tickTime()), 10);
    dispatch({ type: 'START_TIME' })
    dispatch(tickTime())
}
window.startTime = startTime;

export const resetTime = () => ({
    type: 'RESET_TIME'
})

export const stopTime = () => {
    clearInterval(timer);
    return { type: 'STOP_TIME' }
}
window.stopTime = stopTime;

export const noteStart = (note, level) => ({
    type: 'AUDIO_START',
    note, level
});
export const noteEnd = (note, level) => ({
    type: 'AUDIO_END',
    note, level
});