const{Schema, model}=require("mongoose");

const profesorSchema=new Schema({

    nombre: {
        type: String,
        require:true,
        
    },
    fechaNacimiento: {
        type: String,
        require:true,
        
    },
    especialidad: {
        type: String,
        require:true,
        
    },
    imagen: {
        src: {
            type: String,
            require: true,

        },
        alt: {
            type: String,
            require: true,

        }

    }
  
})
module.exports = model(`Profesor`, profesorSchema)