const express = require('express')
const Locador = require('../api/biblioteca/locador')
const AvaliacaoService = require('../api/biblioteca/avaliacaoService')
const LocadorService = require('../api/biblioteca/locadorService')
const LivroService = require('../api/biblioteca/livroService')

module.exports = server => {
    const api = express.Router()
    server.use('/api', api)

    AvaliacaoService.register(api, '/avaliacao')
    LocadorService.register(api, '/locador')
    LivroService.register(api, '/livro')

    api.get('/locador/:locador', (req, res, next) => {
            const locador = req.params.locador
        
            Locador.findOne({nome: locador}, (erro, value) => {
                if (value){
                   res.json({validado: true})
                } else {
                   res.json({comentou: 'Usuario não existe'})
                }
            } )
    })

}