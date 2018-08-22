import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelAndInput from '../common/form/labelAndInput'

class NomeForm extends Component {
    render() {
        return (
            <form role="form"  >
                <div className="box-body">
                    <Field name='name' component={LabelAndInput} readOnly={false}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-primary`}>Confirmar</button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
NomeForm = reduxForm({form: 'NomeForm'})(NomeForm)
export default NomeForm