const express = require('express')
const app = express()
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

//Importamos con destructuring solo la función que necesitamos
//const {sumar} = require('./mis_modulos/calculadora.js');

//Importamos todod el módulo completo
const calculadora = require('./mis_modulos/calculadora.js');

//GET que accede a la raiz
app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo! Bienvenido al server con express!</h1>')
})

//GET que accede a api/sumar y recibe dos número por parametros de URL
app.get('/api/sumar/:num1/:num2', (req, res) => {
    let num1 = req.params.num1
    let num2 = req.params.num2
    
    res.send(`<h1>Estamos realizando la suma de los números: ${num1} y ${num2}!</h1>
        <h2>El resultado de la suma es: ${calculadora.sumar(num1,num2)} </h2>`)
})

//GET que accede a api/restar y recibe dos números por parametros de URL
app.get('/api/restar/:num1/:num2', (req, res) => {
    let num1 = parseFloat(req.params.num1)
    let num2 = parseFloat(req.params.num2)
    
    res.send(`<h1>Estamos realizando la resta de los números: ${num1} y ${num2}!</h1>
        <h2>El resultado de la resta es: ${calculadora.restar(num1,num2)} </h2>`)
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor está corriendo en http://${HOSTNAME}:${PORT}/`);
});
