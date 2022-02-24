
/**
 an = an-2 + an-1
 */
let listaEnumerada = [
                        "Guarda termino previo que es 0.",
                        "Guarda termino actual que es 1.",
                        "Guarda termino actual y previo en una lista.",
                        "Genera un nuevo número  sumando termino previo al actual.",
                        "Remplaza el valor de termino previo por actual.",
                        "Remplaza termino actual por el obtenido en el último cálculo.",
                        "Suma termino actual a sumatorio de términos.",
                        "Guarda termino actual en la lista",
                        "Cuando el termino sea 4000 suma todos los términos conseguidos.",
                        "Imprime la suma de los términos guardados.",
                        "Imprime todos los términos conseguidos."

                    ];
const cargador = document.getElementById("cargador");
let txt;

let an, anMenos1, anMenos2;
let listaTerminos = [];


listaEnumerada.forEach( function(item){
    txt += `                     
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">${item}</label>
    </div>
    `;
});
cargador.innerHTML =  txt;


console.info("dentro js");