import React, { Component } from 'react'

import NomeForm from './nomeForm'
import If from '../common/operator/if'

class Avaliacao extends Component {

    constructor(props) {
        super(props)

        this.state = { validou: false }
    }

    render() {
        return (
            <If test={!this.state.validou} >
                <NomeForm />
            </If>
        )
    }
}
export default Avaliacao