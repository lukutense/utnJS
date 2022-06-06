/* let suma=0

for (i=1;i<=10;i++){
    let valor=parseInt(prompt('ingrese su numero'))
    if (i>5){
        suma=suma+valor
    }
}
console.log(suma) */



/* let sumar=(numeros) => {
    let resultado=0
    for(let i=0 ; i<numeros.length ; i++) {
        console.log(numeros[i])
        resultado += numeros[i]
    }
    return resultado
}

console.log(sumar([5,7,10,12,24]))
 */
 

/* let vector=[] */

/* for (let i=0; i<5; i++) {
    let numero= Math.random() * 1000 
/* este metodo random le dice al navegador que busque un numero aleatorio entre 0 y 1000 */
  /*   vector.push(parseInt(numero))
    }
document.write(vector)

let suma= vector.pop() + vector.pop()

console.log(suma)

console.log(vector) */



/* let multiplicar=(multiplicador,numeros)=>{
    let resultado=[]
    let cuenta=0
    for(let i=0; i<numeros.length;i++){
        resultado.push(cuenta=multiplicador*numeros[i])
    }
    return resultado
    }
    
    
    console.log(multiplicar(2,[5,8,22,45,30])) */


/* let obtenerMenor=(numeros)=>{
    let menor=numeros[0]
    for (let i=0;i<numeros.length;i++){
        //console.log([i])
        if(menor>numeros[i]){
                menor=numeros[i]
        }
    }
        return menor
    }
    
    
    console.log(obtenerMenor([5,7,99,65,23,4])) */
        


/* posible manera para ingresar datos desde el navegador y sumarlo a un array */

/* let arrayPrueba= []
for (let i = 0; i < 10; i++){ 
    arrayPrueba.push(prompt('ingresa tus palabras favoritas'))
}
console.log (arrayPrueba) */



/* Ejercicio con Arrays */

/* let obtenerChatStatus = (usuarias)=>{

let nombreUsuaria1 = ''
let nombreUsuaria2 = ''

    if(usuarias.length == 1) {
        nombreUsuaria1 = usuarias 
        console.log (nombreUsuaria1 + ' está conectada')
    } else if (usuarias.length == 2) {
        nombreUsuaria1 = usuarias[0]
        nombreUsuaria2 = usuarias[1]
        console.log (nombreUsuaria1 + ' y ' + nombreUsuaria2 + ' están conectadas')
    } else if (usuarias.length == 3) {
        nombreUsuaria1 = usuarias[0]
        nombreUsuaria2 = usuarias [1]
        console.log(nombreUsuaria1 + ', ' + nombreUsuaria2 + ' y ' + (usuarias.length - 2) + ' personas más están conectadas')
    }

}

obtenerChatStatus(['Ada'])

obtenerChatStatus(['Ada','Grace'])

obtenerChatStatus(['Ada','Grace', 'Marie'])  */





/* Ejercicio N2 de Arrays */
/* let esMatrizCuadrada=(matrices)=> {
    
    if ((matrices[0].length == matrices[1].length) && (matrices[0].length == matrices[2].length)){
        console.log('true')
    } else {
        console.log('false')
    }

}


esMatrizCuadrada([[4,5],[2,7,1],[8,10]])

esMatrizCuadrada([[4,5,9],[2,7,1],[8,10,5]]) */




/* Ejercicio clase arrays con algunas cosas nuevas.
Crear 5 numeros aleatorios y quitar los ultimos dos y sumarlos entre si*/

/*  let vector= []
for (let i=0; i<5;i++) {
    let numero= Math.random() * (100 - 50) + 50
    vector.push(parseInt(numero))   
}

console.log(vector)

/* let vectorNuevo= []
vectorNuevo = vector.slice(3,5) */

/* let suma = vector.pop() + vector.pop() */


/* console.log(vectorNuevo) */
/* console.log(suma) */


/* Ejercicio clase arrays 
Multiplicar por 2 cinco numeros*/

/* 2,[5,7,22,45,30] */

/* let multiplicar= (multiplicador, numeros) => {
    let resultado= []  
    for (let i=0; i<numeros.length; i++){
        resultado.push(numeros[i] * multiplicador)
    }
    return resultado
}

console.log(multiplicar(2,[5,7,22,45,30])) */

/* Cargar valores desde un prompt, colocarlos en un array y devolver el valor mas bajo */

/* let numeros= []
for (let i = 0; i < 10; i++){ 
    numeros.push(prompt('ingresa 10 numeros aleatorios'))
}

document.write(numeros)
document.write(Math.min(...numeros)) */

/* let obtenerMenor=(numeros) => {
    let menor=numeros[0]
    for (let i=0; i<numeros.length;i++){
        if(menor>numeros[i]){
            menor=numeros[i]
        }
    }
    return menor
}

console.log(obtenerMenor([5,7,99,4,23,10])) */


/* Pruebas boludas

let definirNumero = (numero) =>{return (numero > 0)?'el numero' + numero + ' es postivo':'el numero ' + numero + ' es negativo'}
console.log(definirNumero(-3)) */

/* Primera aproximacion a funcion anonima con callback. Es importante resaltar que el parametro callback de la 1ra funcion pudo
llamarse pepito y no habria diferencia, teniendo en cuenta que respuesta tambien deberia ser asignada al parametro pepito y no callback.

function solicitudServidor(consulta, callback){
    setTimeout(function(){
      var respuesta = consulta + "lleno!";
      callback(respuesta);
    },5000);
  }
  
  //funcion anonima
  function obtenerResultados(resultados){
    console.log("Respuesta del servidor: " + resultados);
  }
  
solicitudServidor("El vaso está medio  ", obtenerResultados); */

/* let piedraPapelTijera= (jug1,jug2) => {

    if((jug1==='tijera' && jug2==='papel') || (jug2==='tijera' && jug1==='papel')) {
        console.log('tijera gana')
    } else if ((jug1==='papel' && jug2==='piedra') || (jug2==='papel' && jug1==='piedra')){
        console.log('papel gana')
    } else if ((jug1==='piedra' && jug2==='tijera') || (jug2==='piedra' && jug1==='tijera')){
        console.log('piedra gana')
    } else if (jug1===jug2){
        console.log('empate')
    }
}


piedraPapelTijera(prompt('elegi'),prompt('elegi')) */


/* Crear una funcion, cargar 10 valores y sumar los ultimos 5 */
let valores=[]
for (let i=0;i<10;i++){
    let numero=Math.random() * (50 - 5) + 5
    valores.push(parseInt(numero))
}
console.log(valores)

let suma=0
valores.forEach((numeros,i)=>{(i>=5)?suma +=numeros:console.log('estas son las primeras 5 vueltas')})
console.log(suma)