/*function mifuncion(texto){
    if((texto.toString())===texto){
        document.write(texto.length);
    }else{
        alert("valor incorrecto")
    }document.write("<br>")
}
let saludar="hola como estas";
mifuncion(saludar);
//let numero=12345;
//let conversion=numero.toString();
//console.log(typeof conversion);
const verificar=(text) =>(text.toString())===text ?document.write(text.length) : alert("valor incorrecto");
let prueba="holaaaaaaaaaaa mundo";
verificar(prueba);


let probando="probando uno dos tres";
console.log(probando.substring(0, 4));*/

/*function convierte(tex){
    if(tex.toString()===tex){
        console.log(tex.split(" "))
    }else{
        alert("ingresa un texto");
    }
}
let ro=" hola hola"
convierte(ro)
let val="hola como estas";
console.log(val.split(" "));


const convert=(documento)=> (documento.toString())===documento ? console.log(documento.split(" ")) : alert("ingrese otro valor");
let accion=prompt("ingresa un valor");
convert(accion);


const multiplicar=(texto,numero)=> {
    if(texto.toString()===texto && Number(numero)===numero){      
     document.write(texto.repeat(numero));
        alert("uno de los valores es incorrecto")
    }
}
let prueba1=prompt("ingresa el texto que quieres repetir")
let prueba2=parseInt(prompt("ingresa la cantidad de veces que quieres que se repita", 0));
multiplicar(prueba1,prueba2);
*/

const contador=(texto)=> (texto.toString())===texto ? document.write(`la cantidad de caracteres es: ${texto.length}`) :alert ("ingresa un valor valido");
let palabra=prompt("ingresa un texto");
contador(palabra);

const convertir=(rodri)=> (rodri.toString())=== rodri ? console.log(rodri.split(" ")) : alert("no es");
let prueba=prompt("escribe las palabras");
convertir(prueba);