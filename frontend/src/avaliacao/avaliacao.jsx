import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { validaLocador, submit } from './avaliacaoActions'

import NomeForm from './nomeForm'
import AvaliacaoForm from './avaliacaoForm'
import If from '../common/operator/if'

class Avaliacao extends Component {

    render() {
        const { validaLocador, submit, validado } = this.props
        return (
            <div>
                <If test={!validado} >
                    <NomeForm readOnly={false} onSubmit={validaLocador} />
                </If>
                <If test={validado} >
                    <AvaliacaoForm onSubmit={submit}/>
                </If>
            </div>
        )
    }
}

const mapStateToProps = state => ({validado: state.avaliacao.validado})
const mapDispatchToProps = dispatch => bindActionCreators({ validaLocador, submit}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Avaliacao)