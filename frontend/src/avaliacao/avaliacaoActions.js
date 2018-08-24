import axios from 'axios'
import { toastr }  from 'react-redux-toastr'
import { initialize } from 'redux-form'
import consts from '../consts'

const VALIDATED = 'VALIDATED'
const RESETED = 'RESETED'

export const validaLocador = locador => {
    return dispatch => {
        const nome = locador.name
        axios.get(`${consts.API_URL}/locador/n/${nome}`)
            .then(resp => {
                dispatch([{
                    type: VALIDATED,
                    payload: resp.data
                }, initialize('AvaliacaoForm', {nomeLocador: resp.data.locador})])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error)
                )
            })
    }
}

export const submit = values => {
    
    return dispatch => {
        axios.post(`${consts.API_URL}/avaliacao`, values)
            .then(resp => {
                var confirmar = confirm("quer continuar?")
                if(confirmar){
                    toastr.success('Sucesso', 'Avaliação Registrada')
                }else{
                    dispatch({
                        type: RESETED,
                        payload: {}
                    })
                }
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}



