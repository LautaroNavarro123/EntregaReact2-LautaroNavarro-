const productos = [{
        id: "1",
        nombre: "Saco Negro",
        precio: 1000,
        stock: 20,
        img: "../img/SacoNegro.jpg",
        idCat: "1"
    },
    {
        id: "2",
        nombre: "Saco Blanco",
        precio: 1000,
        stock: 20,
        img: "../img/SacoBlanco.jpg",
        idCat: "1"
    },
    {
        id: "3",
        nombre: "Camisa Negra",
        precio: 500,
        stock: 20,
        img: "../img/CamisaNegra.jpg",
        idCat: "2"
    },
    {
        id: "4",
        nombre: "Camisa Blanca",
        precio: 500,
        stock: 20,
        img: "../img/CamisaBlanca.jpg",
        idCat: "2"
    }
]


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}



export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}