function verticalKeyboard(state = {octave: 4}, action) {
    switch (action.type) {
        case 'VERTICAL_KEYBOARD_UP_OCTAVE':
            return { ...state, octave: Math.max(state.octave + 1, 7) }
        case 'VERTICAL_KEYBOARD_DOWN_OCTAVE':
            return { ...state, octave: Math.max(state.octave - 1, 2) }
        default:
            return state;
    }
}


export default verticalKeyboard;