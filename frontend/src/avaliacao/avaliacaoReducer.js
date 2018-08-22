const INITIAL_STATE = {validado: false}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'VALIDATED':
            return { ...state, validado: action.payload}
        default:
            return state
    }
}