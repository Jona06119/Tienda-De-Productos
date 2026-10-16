const URL = 'http://localhost:3000/api/productos';

const tabla = document.getElementById('tablaProductos');

async function obtenerProductos() {

    const respuesta = await fetch(URL);

    const productos = await respuesta.json();

    tabla.innerHTML = '';

    productos.forEach(producto => {

        tabla.innerHTML += `
            <tr>
                <td>${producto.idProducto}</td>
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>${producto.stock}</td>
            </tr>
        `;
    });
}

async function agregarProducto() {

    const nombre = document.getElementById('nombre').value;

    const precio = document.getElementById('precio').value;

    const stock = document.getElementById('stock').value;

    await fetch(URL, {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            nombre,
            precio,
            stock
        })

    });

    obtenerProductos();
}

obtenerProductos();