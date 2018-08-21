const restful = require('node-restful')
const mongoose = restful.mongoose

const livroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true }
})

module.exports = restful.model('Livro', livroSchema)