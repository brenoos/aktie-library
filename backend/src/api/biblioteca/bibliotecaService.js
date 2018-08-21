const Locador = require('./locador')
const Livro = require('./livro')
const Avaliacao = require('./avaliacao')
const errorHandler = require('../common/errorHandler')

Locador.methods(['get', 'post', 'put', 'delete'])
Locador.after('post', errorHandler).after('put', errorHandler)

Livro.methods(['get', 'post', 'put', 'delete'])
Livro.after('post', errorHandler).after('put', errorHandler)

Avaliacao.methods(['get', 'post', 'put', 'delete'])
Avaliacao.after('post', errorHandler).after('put', errorHandler)