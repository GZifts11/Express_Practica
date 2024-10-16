const express = require('express');
const { alumnos } = require('../src/alumnos.js')
const { validarCorrelativa, inscribirAlumno } = require('../controller.js')

const routerFrontend = express.Router();

//Middleware
routerFrontend.use(express.json())

routerFrontend.get("/", (req, res) => {
    console.log("Estoy ingresando a /api/alumnos/frontend")
    res.end(JSON.stringify(alumnos.frontend))
})

routerFrontend.get("/:turno", (req, res) => {
    const turno = req.params.turno.toLocaleLowerCase();
    console.log("Turno " + turno)
    console.log("Estoy ingresando a /api/alumnos/frontend")
    const filtrado = alumnos.frontend.filter(
        (alumno) => alumno.turno.toLocaleLowerCase() == turno
    );

    if(filtrado.length === 0){
        res.status(404).end(`No se encontraron alumnos de frontend en el turno ${turno}`)
    }else{
        console.log(filtrado)
        //res.status(200).end(JSON.stringify(filtrado))
        res.status(200).send(JSON.stringify(filtrado))
    }
    
})

routerFrontend.get("/inscribir_examen/:id/:materia", (req, res) => {
    const id = req.params.id
    const materia = req.params.materia
    console.log(`id: ${id}`)
    const alumnoEncontrado = alumnos.frontend.find(
        alumno => {
            console.log(`alumno: ${alumno}`)
            return alumno.id == id
        })
        
        if( alumnoEncontrado != undefined){
            validarCorrelativa(alumnoEncontrado, materia)
                .then( response => { 
                    console.log(response)
                    //res.send(response)
                    return inscribirAlumno(alumnoEncontrado, materia)
                })
                .then( response => {
                    console.log(`response de inscribirAlumno: ${response}`)
                    res.send(response)
                })
                .catch( error => {
                    console.log("catch() - entre al catch")
                    console.log(error)
                    res.send(error)
                }
                )
        }else {
            res.status(404).send(`No se encontró ningún alumno con el id: ${id} `)
        }
})

routerFrontend.post("/inscribir_alumno", (req, res) => {
    const alumnoNuevo = req.body;
    alumnos.frontend.push(alumnoNuevo);
    res.status(200).send(JSON.stringify(alumnos.frontend))
})

routerFrontend.put("/:id", (req, res) => {
    const id = req.params.id
    const alumnoActualizado = req.body

    const indice = alumnos.frontend.findIndex( alumno => alumno.id == id)

    if(indice >= 0){
        alumnos.frontend[indice] = alumnoActualizado
    }else {
        res.status(404).send(`No se encontró algún alumno que coincida con el id: ${id}`)
    }
    
    res.status(200).send(alumnos.frontend)

})

routerFrontend.patch("/:id", (req, res) => {
    const id = req.params.id
    const alumnoActualizado = req.body
    const indice = alumnos.frontend.findIndex( alumno => alumno.id == id)

    if(indice >= 0){
        const alumnoAModificar = alumnos.frontend[indice];
        Object.assign(alumnoAModificar, alumnoActualizado)
    }else {
        res.status(404).send(`No se encontró algún alumno que coincida con el id: ${id}`)
    }

    res.status(200).send(alumnos.frontend)

})

routerFrontend.delete("/:id", (req, res) => {
    const id = req.params.id
    const indice = alumnos.frontend.findIndex( alumno => alumno.id == id)

    if(indice >= 0){
        alumnos.frontend.splice(indice, 1)
    }else{
        res.status(404).send(`No se encontró algún alumno que coincida con el id: ${id}`)
    }
    res.status(200).send(alumnos.frontend)
})

module.exports = routerFrontend