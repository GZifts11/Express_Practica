function validarCorrelativa(alumno, materia){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!alumno.debeCorrelativa){
                resolve(`El alumno ${alumno.nombre} puede rendir el final de ${materia}`)
            }else {
                reject(`El alumno ${alumno.nombre} no puede rendir el final de ${materia}`)
            }
        }, 1000) 
    })
}

function inscribirAlumno(alumno, materia) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(`Se inscribió al alumno ${alumno.nombre} para rendir el final ${materia}`)
        }, 2000)
    })
}

module.exports = { validarCorrelativa, inscribirAlumno }