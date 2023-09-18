const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com banco de dados foi iniciada')

        await mongoose.connect(process.env.MONGO_URL)

        console.log('Conexão com banco de dados feita com sucesso')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados