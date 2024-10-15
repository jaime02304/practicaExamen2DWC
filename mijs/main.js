import { listaConCategorias, listaHTML } from "./fArticulos.js";
import { listaHTMLC } from "./fClientes.js";

//Metodo que muestra la lista de articulos
function mostrarListaA(){
    let div = document.querySelector('#aticulos');
    div.innerHTML='';
    let ul = listaHTML();
    console.log(ul);
    div.appendChild(ul);
}

function mostrarListaC(){
    let ul = listaHTMLC();
    let div = document.querySelector('#clientes');
    div.innerHTML='';
    console.log(ul);
    div.appendChild(ul);
}

function mostrarListaCat(){
    let div = document.querySelector('#aticulos');
    div.innerHTML='';
    let ul = listaConCategorias();
    console.log(ul);
    div.appendChild(ul);
}





window.mostrarListaA=mostrarListaA;
window.mostrarListaC=mostrarListaC;
window.mostrarListaCat=mostrarListaCat;