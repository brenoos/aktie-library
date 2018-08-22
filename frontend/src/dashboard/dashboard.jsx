import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { submit } from '../avaliacao/avaliacaoActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import AvaliacaoForm from '../avaliacao/avaliacaoForm'

class Dashboard extends Component {

    render(){
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <AvaliacaoForm onSubmit={this.props.submit}/>          
                    </Row>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ submit }, dispatch)
export default connect(null, mapDispatchToProps)(Dashboard)