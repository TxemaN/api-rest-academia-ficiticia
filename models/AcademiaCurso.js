const { Schema, model } = require("mongoose");
const cursoSchema = new Schema({

    nombre: {
        type: String,
        require: true,
        unique: false,

    },
    descripcion: {
        type: String,
        require: true,

    },
    fecha: {
        type: String,
        require: true,

    },
    precio: {
        type: String,
        require: true,

    },

    imagen: {
        src: {
            type: String,
            require: true,

        },
        alt: {
            type: String,
            require: true,
            default: Date.now,
        }

    }
    


})
module.exports = model(`Curso`, cursoSchema)