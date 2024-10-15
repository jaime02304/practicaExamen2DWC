const listaArticulos = [
    {name:'Raton',cat:'Dispositivo Externo'}, {name:'Teclado',cat:'Dispositivo Externo'}, {name:'Pantalla', cat:'Dispositivo Externo'}, {name:'Alfombrilla', cat:'Dispositivo Externo'}, {name:'TorreCPU', cat:'Dispositivo Interno'}, {name:'Procesador', cat:'Dispositivo Interno'}, {name:'TarjetaGrafica', cat:'Dispositivo Interno'}
];

export function listaHTML() {
    // Creamos una lista de artículos
    const ul = document.createElement('ul');
    // Por cada artículo un li
    listaArticulos.map( articulo => {
        const li = document.createElement('li');
        const text = document.createTextNode(articulo.name);
        li.appendChild(text);
        ul.appendChild(li);
    } );
    return ul;
}

export function listaConCategorias(){
    const ul = document.createElement('ul');
    // Por cada artículo un li
    listaArticulos.map( articulo => {
        const li = document.createElement('li');
        li.innerHTML= 'Articulo --> '+ articulo.name + '<br> Categoria --> ' + articulo.cat;
        ul.appendChild(li);
    } );
    return ul;

}