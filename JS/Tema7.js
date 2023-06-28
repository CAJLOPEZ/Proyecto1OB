const edad = prompt("¿Cuántos años tienes?")

const familia = new Set(["Gorka", "Maria", "Marta", "Gorka"])
familia.add("Gorka")
familia.add("Javascript")

console.log(familia)

const hoy = new Date()

const nacimiento = new Date(1987, 10, 20)

const comparacion = hoy > nacimiento

const diaNacimiento = nacimiento.getDate()
const mesNacimiento = nacimiento.getMonth() + 1
const anyoNacimiento = nacimiento.getFullYear()

const datos = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    altura: 171,
    eresDesarrollador: true
}

const edad = datos.edad
const lista = [
    {
        ...datos
    },{
        nombre: "Pedro",
        apellido: "Angulo",
        edad: 35,
        altura: 180,
        eresDesarrollador: true
    },{
        nombre: "Amaia",
        apellido: "Etxeberria",
        edad: 30,
        altura: 165,
        eresDesarrollador: false
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)

console.log(listaOrdenada)