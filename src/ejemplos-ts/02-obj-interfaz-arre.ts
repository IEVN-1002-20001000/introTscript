


interface Alumno{
    matricula?:number; //?Objet opcional puedo o no usarlo
    nombre:string;
    email:string;
}

const alumno:Alumno={
    nombre:'Victor',
    email:'vict@gmail.com'
}


console.log(alumno.nombre);