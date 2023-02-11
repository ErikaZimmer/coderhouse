/* ---- ARRAYS ----*/

const productos = [
    {id:1, nombre: "Scon de queso x1" , precio:127, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/528/608/products/70bcf4f9-ed6e-456b-8696-7fb9d9a7063d_nube-efe4a1e08251f3317915872261676399-1024-1024.jpg"},
    {id:2, nombre: "Cookie con chip de choco" , precio:190, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/528/608/products/1b2430dd-1dc5-4bc1-b038-c32fc083c6d5_nube-d4aa61688839d473ba16005338524469-1024-1024.jpg"},
    {id:3, nombre: "Super muffin", precio:240, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/528/608/products/7c38f339-a360-4aad-b424-a0fe71fb0eab_nube-67df41a5fabdac79eb15900018263543-1024-1024.jpg"},
    {id:4, nombre: "Pan de molde integral", precio:270, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/528/608/products/afea1505-81f5-4b66-b31d-cc57e0616965_nube-66689beec6d67d572516005342970498-1024-1024.jpg"},
    {id:5, nombre: "Cuadrado de pastafrola", precio:300, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/528/608/products/956a441a-d212-459e-8aa9-799cc8efd169-e27eac608a06a58a5a16413235243339-1024-1024.jpeg"}
];

const favoritos = [];
const carrito = []; 

/* ---- FLUJO DE PEDIDO ----*/

addProductItem();

/* ---- FUNCIONES ---- */

function addProductItem () {
    for (let i = 0 ; i < productos.length; i++) {
        addHTMLProducto(productos[i]);
    }
}

function getRootContainerProducts() {
    return document.querySelector("#products-container")
}

function addNewElemet(tag) {
    return document.createElement(tag)
}

function addHTMLProducto (producto) {
    const container = getRootContainerProducts();
    const childContainer = addNewElemet('div');
    const image = addNewElemet('img');
    const bodyContainer = addNewElemet('div');
    const bodyTitle = addNewElemet ('h5');
    const bodyPrice = addNewElemet ('p');
    const btnShop = addNewElemet ('button');

    childContainer.className = "card";
    childContainer.setAttribute("style","width: 18rem;");
    image.className = "card-img-top";
    image.setAttribute("alt","Torta Personalizada");
    image.setAttribute("src",producto.img);
    bodyContainer.className = "card-body";
    bodyTitle.className = "card-title";
    bodyPrice.className = "card-text";
    btnShop.className = "btn btn-primary btn-shop";
    btnShop.setAttribute("type","button");
    btnShop.setAttribute("value",producto.id);
    btnShop.textContent = "Agregar al Carrito";
    btnShop.setAttribute("onclick","addItemCarrito(value)");


    container.appendChild(childContainer);
    childContainer.appendChild(image);
    childContainer.appendChild(bodyContainer);
    bodyContainer.appendChild(bodyTitle);
    bodyContainer.appendChild(bodyPrice);
    childContainer.appendChild(btnShop);

    bodyTitle.textContent = producto.nombre;
    bodyPrice.textContent = "$ "+producto.precio;

}

const btnShop = document.getElementsByClassName("btn-shop");
btnShop.addEventListener("click", addItemCarrito(value));

function addItemCarrito (idProd){
    let producto = buscarProducto(idProd);
    let productoIndex = carrito.findIndex(producto => producto.id == idProd); 
    if (productoIndex >= 0) {
        carrito[productoIndex].cantidad += 1;
    } else {
        carrito.push({id:producto.id, producto:producto.nombre, cantidad:1, precio:producto.precio, imagen:producto.img});
    }  
    addProductItem();
}

function buscarProducto(idProd){
    for (let i = 0 ; i < productos.length; i++) {
        if (idProd == productos[i].id) {
            console.log(productos[i]);
            return productos[i];
        }
    }
}

