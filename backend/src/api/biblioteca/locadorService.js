const Locador = require('./locador')
const errorHandler = require('../common/errorHandler')

Locador.methods(['get', 'post', 'put', 'delete'])
Locador.updateOptions({ new: true, runValidators: true })
Locador.after('post', errorHandler).after('put', errorHandler)

// Locador.route('validaLocador', (req, res, next) => {
//     const locador = 'Breno'

//     Locador.findOne({nome: locador}, (erro, value) => {
//         if (value){
//            res.json({validado: true})
//         } else {
//            res.json({comentou: 'Usuario não existe'})
//         }
//     } )
// })

module.exports = Locador