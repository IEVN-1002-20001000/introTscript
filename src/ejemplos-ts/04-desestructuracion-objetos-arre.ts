

//Desestructuras

interface Reproductor{
    volumen: number;
    segundo:number;
    cancion:string;
    detalles:DetaLLes;
}

interface DetaLLes{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen: 90,
    segundo: 66,
    cancion: "Mañanitas",
    detalles: {
        autor:'Cepillin',
        year:1978
    }
}

console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`Los segundos son: ${reproductor.segundo}`);
console.log(`La canción es: ${reproductor.cancion}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`); //detalles.autor, es porque estan anidados los detalles

//esto es desestructuración, se eliminan los puntos
const{volumen,segundo,cancion,detalles}=reproductor
//Se desestructuro
const{autor}=detalles

console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`El cantante es: ${autor}`);

//Areglo
const colores:string[]=['blue','red','green','violet'];
console.log(`Color 1: ${colores[0]}`);
console.log(`Color 2: ${colores[1]}`);
console.log(`Color 3: ${colores[2]}`);

//Desestructurar el arreglo []
const[a,,,b]=colores;
console.log(`Color 2: ${a}`);
