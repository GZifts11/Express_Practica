const express = require('express')
const PORT = 3000
const HOSTNAME = '127.0.0.1'

const { alumnos } = require('./src/alumnos.js')

const routerFrontend = require('./rourters/frontend.js');
const routerBackend = require('./rourters/backend.js');

const app = express()

//Routers
app.use('/api/alumnos/frontend', routerFrontend)
app.use('/api/alumnos/backend', routerBackend)

app.get("/", (req, res) => {
    console.log("Estoy ingresando a la ruta raiz de mi servidor")
    res.send("<h1>INGRESANDO A LA RUTA RAIZ</h1>")
})

app.get("/api/", (req, res) => {
    console.log("Estoy ingresando a /api/")
    res.send("<h1>INGRESANDO A /API</h1>")
})

app.get("/api/alumnos/", (req, res) => {
    console.log("Estoy ingresando a /api/")
    res.end(JSON.stringify(alumnos))
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor está corriendo en http://${HOSTNAME}:${PORT}/`)
})




