const mongoose = require('mongoose');
const{Schema} = mongoose;

const tarea =new Schema({
    titulo:String,
    descripcion: String
});

mongoose.model('Tarea'. tarea);