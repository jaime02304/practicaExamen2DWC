const listaClientes = [
    {name:'Jaime', des:'80%'}, {name:'Juan', des:'80%'}, {name:'Pedro', des:'50%'}, {name:'Alvaro', des:'50%'}, {name:'Lolo', des:'50%'}, {name:'Antonio', des:'20%'}, {name:'Nerea', des:'20%'}
];

export function listaHTMLC() {
    const ul = document.createElement('ul');
    listaClientes.map( articulo => {
        const li = document.createElement('li');
        const text = document.createTextNode(articulo.name);
        li.appendChild(text);
        ul.appendChild(li);
    } );
    return ul;
}

export function tablaDescuento(){
    const tables= documen.createElement('table');

}