const express = require('express');
const { alumnos } = require('../src/alumnos.js')

const routerBackend = express.Router();

//Middleware
routerBackend.use(express.json())

routerBackend.get("/", (req, res) => {
    console.log("Estoy ingresando a /api/alumnos/backend")
    res.end(JSON.stringify(alumnos.backend))
})

routerBackend.get("/:turno", (req, res) => {
    const turno = req.params.turno.toLocaleLowerCase();
    console.log("Turno " + turno)
    console.log("Estoy ingresando a /api/alumnos/frontend")
    const filtrado = alumnos.backend.filter(
        (alumno) => alumno.turno.toLocaleLowerCase() == turno
    );

    if(filtrado.length === 0){
        res.status(404).end(`No se encontraron alumnos de backend en el turno ${turno}`)
    }else{
        console.log(filtrado)
        //res.status(200).end(JSON.stringify(filtrado))
        res.status(200).send(JSON.stringify(filtrado))
    }
    
})

routerBackend.post("/inscribir_alumno", (req, res) => {
    const alumnoNuevo = req.body;
    alumnos.backend.push(alumnoNuevo);
    res.status(200).send(JSON.stringify(alumnos.backend))
})

routerBackend.put("/:id", (req, res) => {
    const id = req.params.id
    const alumnoActualizado = req.body

    const indice = alumnos.backend.findIndex( alumno => alumno.id == id)

    if(indice >= 0){
        alumnos.backend[indice] = alumnoActualizado
    }else {
        res.status(404).send(`No se encontró algún alumno que coincida con el id: ${id}`)
    }

    res.status(200).send(alumnos.backend)

})

routerBackend.delete("/:id", (req, res) => {
    const id = req.params.id
    const indice = alumnos.backend.findIndex( alumno => alumno.id == id)

    if(indice >= 0){
        alumnos.backend.splice(indice, 1)
    }else{
        res.status(404).send(`No se encontró algún alumno que coincida con el id: ${id}`)
    }
    res.status(200).send(alumnos.backend)
})

module.exports = routerBackend