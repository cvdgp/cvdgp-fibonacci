
/************variables para cargar los checkbos con boostrap****************/
const cargador   = document.getElementById("cargador");
const hora       = document.getElementById("hora");
let listaEnumerada = [  "Guarda termino previo que es 0.",
                        "Guarda termino actual que es 1.",
                        "Guarda termino actual y previo en una lista.",
                        "Genera un nuevo número  sumando termino previo al actual.",
                        "Reemplaza el valor de termino previo por actual.",
                        "Reemplaza termino actual por el obtenido en el último cálculo.",
                        "Si el termino hayado es par sumalo al sumatorio de términos.",
                        "Guarda termino actual en la lista",
                        "Cuando el valor del termino sea superior a 4.000.000 suma todos los términos conseguidos.",
                        "Imprime la suma de los términos guardados.",
                        "Imprime todos los términos conseguidos."

                    ];

let txt ="<h2>Secuencia para resolver problema:</h2>";
/***************************************************************/
/***************variables para resolber Fibonacci**************/


let txt_contador2 = " ",
    an, 
    anMenos1 = 0 , 
    anMenos2 = 1 ,
    suma = anMenos2;
let listaTerminos = [anMenos1 , anMenos2 ];
let contenedor2 = document.getElementById("contenedor2");




/**********************carga de datos chackbox con boostrap********************************************/

listaEnumerada.forEach( function(item){
    txt += `                   
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">${item}</label>
    </div>
    `;
});
cargador.innerHTML =  txt;

/*******************************************resolucion fibonacci***************************************/

/**formula matemática   
   /// listaTerminos[n] = listaTerminos[n-2] + listaTerminos[n-1]   ///  

 * 
 * */



for (let n = 2 ; n < 100000 ; n++){
    
    
    listaTerminos[n] = listaTerminos[n-2] + listaTerminos[n-1];
    if(listaTerminos[n] >   4000000)  break;
    if(listaTerminos[n] % 2 === 0 ) suma +=  listaTerminos[n]; 
    txt_contador2 += ` ${listaTerminos[n]},  `
    }  


/**********************************************************************************************************/
contenedor2.innerHTML = `
<h3>Resultado de la prueba</h3>
<p>Dentro de este div regresamos los resultados generados en automático por js</p>
<h4>Resultado de la suma de los términos pares</h4>
<p style= "color: red"> ${suma}</p> 
<h4>Terminos</h4> 
<p style="color:blue">${txt_contador2}</p>

`; 
setInterval(()=>{
    let horaActual = new Date();
     hora.innerHTML =  `Sevilla ${horaActual.toLocaleDateString ()}  ${horaActual.toLocaleTimeString ()}`  ;
    
    } , 1000

);
console.info(suma-1);
console.info(listaTerminos);