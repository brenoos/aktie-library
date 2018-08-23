const restful = require('node-restful')
const mongoose = restful.mongoose
const mongoosePaginate = require('mongoose-paginate')

const avaliacaoSchema = new mongoose.Schema({
    livro: { type: mongoose.Schema.Types.ObjectId, ref: 'Livro', required: true } ,
    locador: { type: mongoose.Schema.Types.ObjectId, ref: 'Locador', required: true } ,
    estado: { type: String, required: true, enum:['Ótimo', 'Bom', 'Regular', 'Ruim'] },
    nota: { type: Number, required: true, enum:[0,1,2,3,4,5,6,7,8,9,10] },
    observacoes : { type: String, min: 1, max: 256, required: true }
})

avaliacaoSchema.plugin(mongoosePaginate)
module.exports = restful.model('Avaliacao', avaliacaoSchema)