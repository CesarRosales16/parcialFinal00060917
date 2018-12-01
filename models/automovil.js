const mongoose = require('mongoose');
const {Schema} = mongoose;

const automovilSchema = new Schema({
    modelo: {type:String},
    marca: {type:String},
    placa: {type:String},
});

module.exports = mongoose.model('automovil',automovilSchema);