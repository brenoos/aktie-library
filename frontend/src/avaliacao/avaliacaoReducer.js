const INITIAL_STATE = {validado: false, locador: ""}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'VALIDATED':
            return { ...state, validado: action.payload.validado, locador: action.payload.locador}
        default:
            return state
    }
}