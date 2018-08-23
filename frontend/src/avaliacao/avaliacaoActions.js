import axios from 'axios'
import { toastr }  from 'react-redux-toastr'
import { initialize } from 'redux-form'
import consts from '../consts'
import bootbox from 'bootbox'

const VALIDATED = 'VALIDATED'
const RESETED = 'RESETED'

export const validaLocador = locador => {
    return dispatch => {
<<<<<<< HEAD
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch()
=======
        const nome = locador.name
        axios.get(`${consts.API_URL}/locador/n/${nome}`)
            .then(resp => {
                dispatch([{
                    type: VALIDATED,
                    payload: resp.data
                }, initialize('AvaliacaoForm', {locador: resp.data.locador})])
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
>>>>>>> 0c9c87c1b8b46b0da9e55990230639bb06c6b3a8
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}



