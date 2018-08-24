const Locador = require('./locador')
const errorHandler = require('../common/errorHandler')

Locador.methods(['get', 'post', 'put', 'delete'])
Locador.updateOptions({ new: true, runValidators: true })
Locador.after('post', errorHandler).after('put', errorHandler)


module.exports = Locador