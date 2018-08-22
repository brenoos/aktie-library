import axios from 'axios'
import { toastr }  from 'react-redux-toastr'
import consts from '../consts'

const VALIDATED = 'VALIDATED'

export const validaLocador = locador => {
    return dispatch => {
        const nome = locador.name
        axios.get(`${consts.API_URL}/locador/n/${nome}`)
            .then(resp => {
                dispatch({
                    type: VALIDATED,
                    payload: resp.data.validado
                })
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error)
                )
            })
    }
}



