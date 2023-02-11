/* ---- ARRAYS ----*/

const productos = [
    {id:1, nombre: "Scon de queso x1" , precio:127, stock:2, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/528/608/products/70bcf4f9-ed6e-456b-8696-7fb9d9a7063d_nube-efe4a1e08251f3317915872261676399-1024-1024.jpg"},
    {id:2, nombre: "Cookie con chip de choco" , precio:190, stock:5, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/528/608/products/1b2430dd-1dc5-4bc1-b038-c32fc083c6d5_nube-d4aa61688839d473ba16005338524469-1024-1024.jpg"},
    {id:3, nombre: "Super muffin", precio:240, stock:15, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/528/608/products/7c38f339-a360-4aad-b424-a0fe71fb0eab_nube-67df41a5fabdac79eb15900018263543-1024-1024.jpg"},
    {id:4, nombre: "Pan de molde integral", precio:270, stock:10, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/528/608/products/afea1505-81f5-4b66-b31d-cc57e0616965_nube-66689beec6d67d572516005342970498-1024-1024.jpg"},
    {id:5, nombre: "Cuadrado de pastafrola", precio:300, stock:0, img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/528/608/products/956a441a-d212-459e-8aa9-799cc8efd169-e27eac608a06a58a5a16413235243339-1024-1024.jpeg"}
];

var favoritos = [];
var carrito = []; 

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
    const btnFavoritos = addNewElemet('button');
    const svgFavoritos = addNewElemet('svg');
    const pathFavoritos = addNewElemet('path');
    const image = addNewElemet('img');
    const bodyContainer = addNewElemet('div');
    const bodyTitle = addNewElemet ('h5');
    const bodyPrice = addNewElemet ('p');
    const btnShop = addNewElemet ('button');

    childContainer.className = "card";
    childContainer.setAttribute("style","width: 18rem;");
    btnFavoritos.setAttribute("type","button");
    btnFavoritos.className = "btn btn-favorito";
    svgFavoritos.setAttribute("xmlns","http://www.w3.org/2000/svg");
    svgFavoritos.setAttribute("width","16");
    svgFavoritos.setAttribute("height","16");
    svgFavoritos.setAttribute("fill","currentColor");
    svgFavoritos.className = "bi bi-heart"
    svgFavoritos.setAttribute("viewBox","0 0 16 16");
    pathFavoritos.setAttribute("d","m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z");
    image.className = "card-img-top";
    image.setAttribute("alt","Torta Personalizada");
    image.setAttribute("src",producto.img);
    bodyContainer.className = "card-body";
    bodyTitle.className = "card-title";
    bodyPrice.className = "card-text";
    btnShop.className = "btn btn-primary btn-shop";
    btnShop.setAttribute("type","button");
    btnShop.setAttribute("id","btn"+producto.id);
    btnShop.setAttribute("value",producto.id);
    btnShop.textContent = "Agregar al Carrito";
    //btnShop.addEventListener("click", );

    container.appendChild(childContainer);
    childContainer.appendChild(btnFavoritos);
    btnFavoritos.appendChild(svgFavoritos);
    svgFavoritos.appendChild(pathFavoritos);
    childContainer.appendChild(image);
    childContainer.appendChild(bodyContainer);
    bodyContainer.appendChild(bodyTitle);
    bodyContainer.appendChild(bodyPrice);
    childContainer.appendChild(btnShop);

    bodyTitle.textContent = producto.nombre;
    bodyPrice.textContent = "$ "+producto.precio;

     $( `#btn${producto.id}`).click(function() {
        addItemCarrito(producto.id)});
}


function addItemCarrito (idProd){
    console.log(carrito); 
    let producto = productos.find(producto => producto.id == idProd); 
    let productoIndex = carrito.findIndex(producto => producto.idArticulo === idProd); 
    if (productoIndex >= 0) {
        carrito[productoIndex].cantidad += 1;
    } else {
        carrito.push({idArticulo:producto.id, articulo:producto.nombre, cantidad:1, precio:producto.precio, imagen:producto.img});
    }  

    showCart();
    console.log(carrito); 
}


