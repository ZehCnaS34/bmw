const initialState = {
    height: 0,
}

function pianoRoll(state = initialState, action) {
    switch (action.type) {
        case 'PIANO_ROLL_SET_HEIGHT':
            return { ...state, height: action.height };
        default:
            return state;
    }
}

export default pianoRoll;