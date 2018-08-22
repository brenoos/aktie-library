import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'


import TabReducer from '../common/tab/tabReducer'
import AvaliacaoReducer from '../avaliacao/avaliacaoReducer'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    avaliacao: AvaliacaoReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer