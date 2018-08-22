import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { validaLocador } from './avaliacaoActions'

import NomeForm from './nomeForm'
import If from '../common/operator/if'

class Avaliacao extends Component {

    render() {
        return (
            <If test={!this.props.validado} >
                <NomeForm readOnly={false} onSubmit={this.props.validaLocador} />
            </If>
        )
    }
}

const mapStateToProps = state => ({validado: state.avaliacao.validado})
const mapDispatchToProps = dispatch => bindActionCreators({ validaLocador }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Avaliacao)