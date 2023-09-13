


interface Alumno{
    matricula?:number; //?Objet opcional puedo o no usarlo
    nombre:string;
    email:string;
}

const alumno:Alumno={
    nombre:'Victor',
    email:'vict@gmail.com'
}
console.table(alumno);

let mascotas:string[]=['perro', 'gato','perico']

mascotas[1]='perico verde';
mascotas.push('gato dos');
console.table(mascotas);

let tem:(string|number)[]=[];
tem.push('RCR');
tem.push(34);

