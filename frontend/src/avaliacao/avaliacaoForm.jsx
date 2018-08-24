import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, initialize } from 'redux-form'
import axios from 'axios'
import consts from '../consts'

import { voltar } from './avaliacaoActions'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'


class AvaliacaoForm extends Component {

    constructor(props){
        super(props)
        this.state = {list: []}
    }

    componentWillMount() {
        this.getList()
    }

    getList(){
        axios.get(`${consts.API_URL}/livro`)
            .then(resp => this.setState({list: resp.data}))
    }

    renderOptions(){
        const lista = this.state.list || []

        return lista.map(livro => (
            <option key={livro._id} value={livro.titulo}>{livro.titulo}</option>
        ))

    }

    render() {
        return (
            <form role="form" onSubmit={this.props.handleSubmit} >
                <div className="box-body">
                <Grid cols='12 12'>
                    <Row>
                    <label htmlFor='livro'>Livro</label>
                        <Field name='nomeLivro' component='select' className='form-control'>
                           <option ></option>
                           {this.renderOptions()}
                        </Field>
                    </Row>
                </Grid>
                    <Grid cols='12 12'>
                        <Row>
                            <div>
                                <label htmlFor='nota'>Nota</label>
                                <div >
                                    <label><Field name="nota" component='input' type="radio" value="0" />-> 0</label>
                                    <label><Field name="nota" component='input' type="radio" value="1" />-> 1</label>
                                    <label><Field name="nota" component='input' type="radio" value="2" />-> 2</label>
                                    <label><Field name="nota" component='input' type="radio" value="3" />-> 3</label>
                                    <label><Field name="nota" component='input' type="radio" value="4" />-> 4</label>
                                    <label><Field name="nota" component='input' type="radio" value="5" />-> 5</label>
                                    <label><Field name="nota" component='input' type="radio" value="6" />-> 6</label>
                                    <label><Field name="nota" component='input' type="radio" value="7" />-> 7</label>
                                    <label><Field name="nota" component='input' type="radio" value="8" />-> 8</label>
                                    <label><Field name="nota" component='input' type="radio" value="9" />-> 9</label>
                                    <label><Field name="nota" component='input' type="radio" value="10" />-> 10</label>
                                </div>
                            </div>
                        </Row>
                    </Grid> 
                    <Grid cols='12 4'>
                        <Row>
                        <label htmlFor='estado'>Estado de conservação</label>
                            <Field name='estado' component='select' className='form-control' >
                                <option></option>
                                <option value='Ruim'>Ruim</option>
                                <option value='Regular'>Regular</option>
                                <option value='Bom'>Bom</option>
                                <option value='Ótimo'>Ótimo</option>
                            </Field>
                        </Row>
                    </Grid>
                    <Grid cols='12 12'>
                        <Row>
                            <label htmlFor='observacoes'>Observações</label>
                            <div >
                                <Field name="observacoes" component='textarea' rows='5' cols='70'  />
                            </div>
                        </Row>
                    </Grid>
                        
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-primary`}>Confirmar</button>
                    <button type='button' className='btn btn-default' onClick={this.props.voltar}>Cancelar</button>
                </div>
            </form>
        )
    }
}
AvaliacaoForm = reduxForm({ form: 'AvaliacaoForm' })(AvaliacaoForm)
const mapDispatchToProps = dispatch => bindActionCreators({voltar}, dispatch)
export default connect(null, mapDispatchToProps)(AvaliacaoForm)