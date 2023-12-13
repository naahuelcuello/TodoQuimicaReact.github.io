const Productos =  [ 
    {id: 1,
    titulo: "Matraz Aforado",
    descripcion: "El matraz aforado es parte del llamado material de vidrio de laboratorio y consiste en un tipo de matraz que se usa como material volumétrico.",
    precio: 100,
    categoria: "Volumetrico",
    stock: 5,
    imagen:"imagen1"},
      
    {id: 2,
    titulo: "Probeta",
    descripcion: "La probeta es un instrumento volumétrico que consiste en un cilindro graduado de vidrio común que permite contener líquidos y sirve para medir volúmenes.",
    precio: 120,
    categoria: "Volumetrico",
    stock: 5,
    imagen:"imagen2"},
      
    {id: 3,
    titulo: "Pipeta",
    descripcion: "La pipeta es un instrumento volumétrico usado en los laboratorios de ciencias químicas y de ciencias de la vida y la salud que permite medir la alícuota.",
    precio: 150,
    categoria: "Volumetrico",
    stock: 5,
    imagen:"imagen3"},
      
    {id: 4,
    titulo: "Termometro",
    descripcion: "El termómetro es un instrumento de medición de temperatura. Desde su invención ha evolucionado mucho, principalmente a partir del desarrollo de los termómetros digitales. ",
    precio: 175,
    categoria: "Medicion",
    stock: 5,
    imagen:"imagen4"},
      
    {id: 5,
    titulo: "Balanza",
    descripcion: "El termómetro es un instrumento de medición de temperatura. Desde su invención ha evolucionado mucho, principalmente a partir del desarrollo de los termómetros digitales. ",
    precio: 190,
    categoria: "Medicion",
    stock: 5,
    imagen:"imagen5"}
      
    ]
    
    export const getProductos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Productos);
            }, 500)
        })
    }
    
    export const getUnProducto = (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Convert idItem to number
                const itemId = parseInt(id, 10);
                const producto = Productos.find((item) => item.id === itemId);
                resolve(producto);
            }, 500);
        });
    };
    
    
    export const getProdByCat = (idCategoria) => {
        return new Promise(resolve => {
            setTimeout(() => {
                const productosCategoria = Productos.filter(item => item.categoria === idCategoria);
                resolve(productosCategoria);
            }, 500)
        })
    }
    