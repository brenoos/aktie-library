const restful = require('node-restful')
const mongoose = restful.mongoose

const avaliacaoSchema = new mongoose.Schema({
    nomeLivro: { type: String, required: true },
    nomeLocador: { type: String, required: true },
    estado: { type: String, required: true, enum:['Ótimo', 'Bom', 'Regular', 'Ruim'] },
    nota: { type: Number, required: true, enum:[0,1,2,3,4,5,6,7,8,9,10] },
    observacoes : { type: String, min: 1, max: 256, required: true }
})

module.exports = restful.model('Avaliacao', avaliacaoSchema)