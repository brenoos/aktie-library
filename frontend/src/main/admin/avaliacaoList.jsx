import React, { Component } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import consts from '../../consts'
import Grid from '../../common/layout/grid'

class AvaliacaoList extends Component {
    constructor(props) {
        super(props)

        this.handlePageClick = this.handlePageClick.bind(this)
        this.state = {
            data: [],
            limit: 5,
            pageCount: 0,
            offset: 0,
            filtro: ''
        }
    }

    componentWillMount() {
        this.getList()
        this.getCount()
    }


    getCount() {
        axios.get(`${consts.API_URL}/avaliacao/count`)
            .then(resp => {
                this.setState({ pageCount: Math.ceil(resp.data.value / this.state.limit) })
            })
    }

    getList(filtro) {
        const search = filtro ? `&nomeLocador__regex=${filtro}` : ''
        axios.get(`${consts.API_URL}/avaliacao/?limit=${this.state.limit}&skip=${this.state.offset}${search}`)
            .then(resp => {
                this.setState({ data: resp.data })
            })
    }


    handlePageClick(data) {
        let selected = data.selected
        let offset = Math.ceil(selected * this.state.limit)
        console.log(offset)
        this.setState({ offset: offset }, () => this.getList())

    }

    renderRows() {
        const list = this.state.data || []
        return list.map(item => (
            <tr key={item._id}>
                <td>{item.nomeLocador}</td>
                <td>{item.nomeLivro}</td>
                <td>{item.nota}</td>
                <td>{item.estado}</td>
                <td>{item.observacoes}</td>
            </tr>
        )
        )

    }

    render() {
        return (
                <div>
                        <input id='pesquisa' className='form-control' placeholder='Pesquisar'/>
                        <button className='btn btn-info' onClick={() => this.getList(document.getElementById('pesquisa').value)}> 
                        <i className="fa fa-search"></i>
                    </button>
                    <button className='btn btn-default' onClick={() => this.getList()}> 
                        <i className="fa fa-close"></i>
                    </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Locador</th>
                            <th>Livro</th>
                            <th>Nota</th>
                            <th>Estado</th>
                            <th>Observações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                <ReactPaginate previousLabel={"Anterior"}
                    nextLabel={"Proxima"}
                    breakLabel={<a href="">...</a>}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>
        )
    }
}
export default AvaliacaoList