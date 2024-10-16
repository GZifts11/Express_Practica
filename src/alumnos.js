const alumnos = {
    frontend:[
        {
            id: 1,
            nombre: "Juan Perez",
            turno: "mañana",
            comision: "A",
            debeCorrelativa: true
        },
        {
            id: 2,
            nombre: "Hodor",
            turno: "noche",
            comision: "A",
            debeCorrelativa: false
        },
        {
            id: 3,
            nombre: "Camila Perez",
            turno: "tarde",
            comision: "B",
            debeCorrelativa: true
        },
        {
            id: 4,
            nombre: "Biff Tannen",
            turno: "mañana",
            comision: "A",
            debeCorrelativa: false
        }
    ],
    backend:[
        {
            id: 1,
            nombre: "Marty Mcfly",
            turno: "mañana",
            comision: "A",
            debeCorrelativa: false
        },
        {
            id: 2,
            nombre: "Emmett Brown",
            turno: "noche",
            comision: "B",
            debeCorrelativa: false
        },
        {
            id: 3,
            nombre: "Jhon Snow",
            turno: "noche",
            comision: "B",
            debeCorrelativa: true
        },
        {
            id: 4,
            nombre: "Arya Stark",
            turno: "mañana",
            comision: "A",
            debeCorrelativa: false
        },
        {
            id: 5,
            nombre: "Maximo Decimo Meridio, Comandande de los ejercitos del norte, general de las legiones Fenix",
            turno: "mañana",
            comision: "A",
            debeCorrelativa: false
        }
    ]
}

module.exports.alumnos = alumnos
