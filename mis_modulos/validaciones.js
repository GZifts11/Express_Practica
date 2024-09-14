

let miNumero = 2
let miNumeroCadena = "2"

console.log(typeof miNumero)
console.log(typeof miNumeroCadena)

//Compara solo el valor sin tener en cuenta el tipo de objeto o variable
//En este caso arroja TRUE porque coincide el valor 2 number con el "2" string
console.log(miNumero == miNumeroCadena)

//Comparación exacta, tiene en cuenta el valor y el tipo de objeto o variable
//En este caso arroja FALSE porque si bien coincide el valor 2 number con el "2" string,
//No coinciden los tipos number con string
console.log(miNumero === miNumeroCadena)