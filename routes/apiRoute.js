const express = require("express");
const { check } = require("express-validator")

const router = express.Router();
const { getCursos, getCursobyID, createCurso, updateCursobyID, eraseCurso, } = require("../controllers/apiControllers")
const { getProfesores, getProfesorbyID, createProfesor, eraseProfe, updateProfebyID } = require("../controllers/apiControllers")
const { validarInputs } = require("../middleware/validateInputs")


//recoge los cursos
router.get("/cursos", getCursos)


//recoge curso por su id

router.get("/cursos/:id", getCursobyID)

//crea un curso
router.post(
    "/cursos",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("descripcion", "La descripción es obligatoria").not().isEmpty(),
        validarInputs,
    ],
    createCurso)

//actualice un curso
router.put("/cursos/:id",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("descripcion", "La descripción es obligatoria").not().isEmpty(),
        validarInputs,
    ],
    updateCursobyID)
//elimine un curso
router.delete("/cursos/:id", eraseCurso)

//ESPACIO PARA PROFESORES

//recoge los profesores
router.get("/profesores", getProfesores)

//recoge profe por su id

router.get("/profesores/:id", getProfesorbyID)

//crea un profesor
router.post(
    "/profesores",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("especialidad", "La especialidad es obligatoria").not().isEmpty(),
        validarInputs,
    ],
    createProfesor)

 

    //actualizar profesor por ID, necesita nombre y especialidad en postman
router.put("/profesores/:id",
[
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("especialidad", "La especialidad es obligatoria").not().isEmpty(),
    validarInputs,
],
updateProfebyID)


//borrar un profesor, necesita postman vacío
router.delete("/profesores/:id", eraseProfe)


module.exports = router