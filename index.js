class Estudiante  {
    #nombre
    #asignaturas 
    
    constructor(nombre,asignaturas) {
        this.#nombre=nombre
        this.#asignaturas=asignaturas
    }
    Obtendatos() {
        console.log('El nombre del estudiante es:'+ this.#nombre +' y las materias que cursa son: '+ this.#asignaturas)
    }
}
const estudiante1= new Estudiante('Pedro', ['Javascript','HTML','CSS'])
estudiante1.Obtendatos()