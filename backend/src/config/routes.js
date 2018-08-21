const express = require('express')


module.exports = server => {
    const api = express.Router()
    server.use('/api', api)

    const AvaliacaoService = require('../api/biblioteca/avaliacaoService')
    const LocadorService = require('../api/biblioteca/locadorService')
    const LivroService = require('../api/biblioteca/livroService')

    AvaliacaoService.register(api, '/avaliacao')
    LocadorService.register(api, '/locador')
    LivroService.register(api, '/livro')

}