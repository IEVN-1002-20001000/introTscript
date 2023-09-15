
class Persona2{
    //Atributos de la clase
    nombre:string;
    edad:number;

    //Constructor de la clase --- No tiene dato de edvolución
    constructor(a:string,b:number){
            this.nombre=a;
            this.edad=b;
    }

    //
    imprimir(){
        console.table(`Nombre: ${this.nombre} Edad: ${this.edad}`);
    }
}

//LO hacemos instancia
let persona2:Persona2;
persona2=new Persona2('Victor',24);
persona2.imprimir();

class Dado{
    private valor:number=0;

    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }
}
let dado1=new Dado();
dado1.tirar()
dado1.imprimir();

class Persona3{

    //Constructor en una sola línea
    constructor(public nombre:string,public edad:number){}

    imprimir(){
        console.table(`Nombre: ${this.nombre} Edad: ${this.edad}`);
    }
}