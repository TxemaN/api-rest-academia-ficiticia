const Curso = require('../models/AcademiaCurso')
const Profesor = require(`../models/AcademiaProfesor`)

//recoger todos los cursos


const getCursos = async (req, res) => {

    try {
        const cursos = await Curso.find()
        console.log(cursos)
        return res.status(200).json({
            ok: true,
            curso: cursos,
            msg: "recoge todos los cursos EDITADO"

        })
    } catch (error) {
        console.log(error)
    }
}


//recoge curso por su id

const getCursobyID = async (req, res) => {
    const id = req.params.id;
    try {
        const cursoPorID = await Curso.findById(id)
        console.log(cursoPorID)
        return res.status(200).json({
            ok: true,
            curso: cursoPorID,
            msg: "recoge curso con id especifica"

        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Contacta con el admin"
        })
    }
}

//crea un curso
const createCurso = async (req, res) => {
    const curso = new Curso(req.body)

    try {
        const nombre = curso.nombre
        const existe = await Curso.find({ nombre: nombre });
        console.log(nombre)
        if (existe) {
            return res.status(400).json({
                ok: false,
                msg: 'Ese curso ya existe!'
            });
        };


        const cursoGuardado = await curso.save()
        console.log(cursoGuardado)
        return res.status(201).json({
            ok: true,
            curso: cursoGuardado,
            msg: "crea un curso"

        })
    } catch (error) {
        console.log(error)
    }




}

//actualice un curso
const updateCursobyID = async (req, res) => {
    const curso = new Curso(req.body)

    try {
        const nombre = curso.nombre
        const existe = await Curso.findOne({ nombre: nombre });
        console.log(nombre)
        if (existe) {
            return res.status(400).json({
                ok: false,
                msg: 'Ese curso ya existe!'
            });
        };
        const cursoModificadoPorID = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log(cursoModificadoPorID)
        return res.status(200).json({
            ok: true,
            curso: cursoModificadoPorID,
            msg: "recoge y modifica curso con id especifica"

        })
    } catch (error) {
        console.log(error)
    }
}
//elimine un curso
const eraseCurso = async (req, res) => {
    const id = req.params.id;
    try {
        const cursoEliminadoPorID = await Curso.findByIdAndRemove(id)
        console.log(cursoEliminadoPorID)
        return res.status(200).json({
            ok: true,
            curso: cursoEliminadoPorID,
            msg: "recoge curso con id especifica y lo elimina"

        })
    } catch (error) {
        console.log(error)
    }
}

//SIGUIENTE ESPACIO PARA PROFESORES

//recoger todos los profesores


const getProfesores = async (req, res) => {

    try {
        const profesores = await Profesor.find()
        console.log(profesores)
        return res.status(200).json({
            ok: true,
            profesor: profesores,
            msg: "recoge todos los profesores"

        })
    } catch (error) {
        console.log(error)
    }
}

//recoge profesor por su id

const getProfesorbyID = async (req, res) => {
    const id = req.params.id;
    try {
        const profePorID = await Profesor.findById(id)
        console.log(profePorID)
        return res.status(200).json({
            ok: true,
            profesor: profePorID,
            msg: "recoge profe con id especifica"

        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Contacta con el admin"
        })
    }
}

//crea un profesor, necesita nombre y especialidad en el body
const createProfesor = async (req, res) => {
    const profesor = new Profesor(req.body)

    try {
        const nombre = profesor.nombre
        const existe = await Profesor.findOne({ nombre: nombre });
        console.log(nombre)
        if (existe) {
            return res.status(400).json({
                ok: false,
                msg: 'Ese profe ya trabaja con nosotros!'
            });
        };


        const profeGuardado = await profesor.save()
        console.log(profeGuardado)
        return res.status(201).json({
            ok: false,
            profesor: profeGuardado,
            msg: "añade un profesor"

        })
    } catch (error) {
        console.log(error)
        
    }

}

//actualiza profesor, necesita nombre y especialidad en el body
const updateProfebyID = async (req, res) => {
    const profesor = new Profesor(req.body)

    try {
        const nombre = profesor.nombre
        const existe = await Profesor.findOne({ nombre: nombre });
        console.log(nombre)
        if (existe) {
            return res.status(400).json({
                ok: false,
                msg: 'Ese profe ya curra con nosotros!'
            });
        };
        const profeModificadoPorID = await Profesor.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log(profeModificadoPorID)
        return res.status(200).json({
            ok: true,
            profesor: profeModificadoPorID,
            msg: "recoge y modifica docente con id especifica"

        })
    } catch (error) {
        console.log(error)
    }
}

//BORRA PROFESOR,el body debe estar vacío por completo
const eraseProfe = async (req, res) => {
    const id = req.params.id;
    try {
        const docenteEliminadoPorID = await Profesor.findByIdAndRemove(id)
        console.log(docenteEliminadoPorID)
        return res.status(200).json({
            ok: true,
            profe: docenteEliminadoPorID,
            msg: "probando problemas con el json",

        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getCursos,
    getCursobyID,
    createCurso,
    updateCursobyID,
    eraseCurso,
    getProfesores,
    getProfesorbyID,
    createProfesor,
    updateProfebyID,
    eraseProfe,
    
}