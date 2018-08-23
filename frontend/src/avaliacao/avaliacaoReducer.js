const INITIAL_STATE = {validado: false, locador: ""}
const VALIDATED = 'VALIDATED'
const RESETED = 'RESETED'

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case VALIDATED:
            return { ...state, validado: action.payload.validado, locador: action.payload.locador}
        case RESETED:
            return { ...state, validado: false, locador: "" }
        default:
            return state
    }
}