class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre; 
        this.precio = precio;
        this.img = img;
        this.cantidad = 1; 
    }
}

const peters = new Producto(1, "67 peters", 510, "imagenes/vodka/67peters.webp");
const absolut = new Producto(2, "Absolut", 1190, "imagenes/vodka/absolut.webp");
const absolutsab = new Producto(3, "Absolut saborizado", 1480, "imagenes/vodka/absolutsab.webp");
const beluga = new Producto(4, "Beluga", 7210, "imagenes/vodka/beluga.webp");
const greygoose = new Producto(5, "Grey Goose", 8500, "imagenes/vodka/greygoose.webp");
const orloff = new Producto(6, "Orloff", 590, "imagenes/vodka/orloff.webp");
const sernova = new Producto(7,"Sernova", 870, "imagenes/vodka/sernova.webp");
const smirnoff = new Producto(8, "Smirnoff", 720, "imagenes/vodka/smirnoff.webp");
const nikov = new Producto(9, "Nikov", 480, "imagenes/vodka/nikov.webp");
const skyy = new Producto(10, "Skyy", 910, "imagenes/vodka/skyy.webp");

const productos = [peters, absolut, absolutsab, beluga, greygoose, orloff, sernova, smirnoff, nikov, skyy];


let carrito = [];


const contenedorVodka = document.getElementById('contenedorVodka')

const mostrarVodka = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xs-12" ,"col-sm-6", "col-md-6", "col-lg-3");
        card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                <div class="card-body">
                <h3 class="card-title"> ${producto.nombre} </h3>
                <p class="card-text"> ${producto.precio} </p>
                <button class="btn colorBoton" id="boton${producto.id}"> Agregar al Carrito </button>
                </div>
            </div>
        `
        contenedorVodka.appendChild(card);


         const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id)
        })

    })

    const agregarAlCarrito = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else {
        carrito.push(producto);
        //Al final de la clase, guardamos en el localStorage. 
        //Trabajamos con el localStorage: 
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
    calcularTotal();
}

}
 mostrarVodka();