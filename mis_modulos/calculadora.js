function sumar(numero1, numero2) {
    let num1 = parseFloat(numero1)
    let num2 = parseFloat(numero2)
    let resultado = num1 + num2
    console.log(`El resultado de la suma es: ${resultado}`)
    return resultado
}

function restar(numero1, numero2) {
    let resultado = numero1 - numero2
    console.log(`El resultado de la resta es: ${resultado}`)
    return resultado
}

//Test de las funciones sumar y restar
//sumar(4,6)
//restar(4,6)

//Export de CJS aclarando el nombre de propiedad y función que se le asigna al objeto módulo.exports
/* module.exports = {
    sumar: sumar,
    restar: restar
} */

//Export de CJS - no es necesitario aclarar el nombre de la propiedad cuando coincide con el nombre de la función
module.exports = { sumar, restar }


//console.log(module.exports)