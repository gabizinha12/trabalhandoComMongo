const mongoose = require('mongoose');

// Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/aprendendo', {
        useNewUrlParser: true , 
        useUnifiedTopology: true
    }).then(()=>{
        console.log("MongoDB Conectado...");
    }).catch((err)=>{
        console.log("Houve um erro: " + err);
    });

    const UsuarioSchema = mongoose.Schema({
        nome: {
            type: String,
            require: true,
        },
        sobrenome: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String,
        }
    })

    mongoose.model('usuarios', UsuarioSchema)
  

    const novoUsuario = mongoose.model('usuarios')

    new novoUsuario({
        nome: "Gabi",
        sobrenome: "Lima",
        email: "email@email.com",
        idade: 19,
        pais: "Brasil"
    }).save().then(() => {
        console.log("Salvo com sucesso")
    }).catch((err) => {
        console.log(err)
    })