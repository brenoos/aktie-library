const Avaliacao = require('./avaliacao')
const errorHandler = require('../common/errorHandler')

Avaliacao.methods(['get', 'post', 'put', 'delete'])
Avaliacao.updateOptions({ new: true, runValidators: true })
Avaliacao.before('post', checaAvaliacao).after('post', errorHandler).after('put', errorHandler)

function checaAvaliacao (req, res, next)  {
    const livroNome = req.body.nomeLivro  
    const locadorNome = req.body.nomeLocador  

    Avaliacao.findOne({
        $and: [
            {nomeLivro: livroNome}, 
            {nomeLocador: locadorNome}
        ]
        
    }, (erro, avaliacao) => {
        if (erro) {
            res.status(442).json({errors: [error]})
        } else if (avaliacao){
            res.status(442).json({errors: ["Você ja comentou esse livro"]})
        } else {
            next()
        }
    } )
}

Avaliacao.route('count', ['get'], (req, res, next) => {
    Avaliacao.count((error, value) => {
        if(error){
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})




module.exports = Avaliacao