const restful = require('node-restful')
const mongoose = restful.mongoose

const locadorSchema = new mongoose.Schema({
    nome: { type: String, required: true }
})

module.exports = restful.model('Locador', locadorSchema)