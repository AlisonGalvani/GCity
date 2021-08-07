const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/GCity', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if(err) { console.log('Erro ao se conectar com o banco de dados.');}
});
 
const citySchema = new mongoose.Schema({
    name: String,
    ceps: [{
        cep: String
    }]
}, { collection: 'city' }
);
 
module.exports = { Mongoose: mongoose, CitySchema: citySchema }