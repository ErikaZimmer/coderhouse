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

showSelect();

/* ---- FUNCIONES ---- */

function addProductItem (arr) {
    for (let i = 0 ; i < arr.length; i++) {
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
    const spanFavoritosIn = addNewElemet('span');
    const spanFavoritosOut = addNewElemet('span');
    const image = addNewElemet('img');
    const bodyContainer = addNewElemet('div');
    const bodyTitle = addNewElemet ('h5');
    const bodyPrice = addNewElemet ('p');
    const btnShop = addNewElemet ('button');
    const btnStock = addNewElemet ('button');

    childContainer.className = "card";
    childContainer.setAttribute("style","width: 18rem;");
    btnFavoritos.setAttribute("type","button");
    btnFavoritos.className = "btn btn-favorito";
    spanFavoritosOut.className = "material-icons material-icons-outlined";
    spanFavoritosOut.textContent = "favorite_border";
    spanFavoritosOut.setAttribute("id","fvrtOut"+producto.id);
    spanFavoritosIn.className = "material-icons material-icons-outlined";
    spanFavoritosIn.textContent = "favorite";
    spanFavoritosIn.setAttribute("id","fvrtIn"+producto.id);
    spanFavoritosIn.setAttribute("style","display:none");
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
    btnStock.className = "btn btn-stock";
    btnStock.setAttribute("type","button");
    btnStock.setAttribute("id","btnStock"+producto.id);
    btnStock.setAttribute("style","display:none");
    btnStock.textContent = "Sin Stock";

    container.appendChild(childContainer);
    childContainer.appendChild(btnFavoritos);
    btnFavoritos.appendChild(spanFavoritosIn);
    btnFavoritos.appendChild(spanFavoritosOut);
    childContainer.appendChild(image);
    childContainer.appendChild(bodyContainer);
    bodyContainer.appendChild(bodyTitle);
    bodyContainer.appendChild(bodyPrice);
    childContainer.appendChild(btnShop);
    childContainer.appendChild(btnStock);

    bodyTitle.textContent = producto.nombre;
    bodyPrice.textContent = "$ "+producto.precio;


    $( `#btn${producto.id}`).click(function() {
        verificarStock(producto.id)
    });   
    $( `#fvrtOut${producto.id}`).click(function() {
        newFavorito(producto.id)
    }); 

    $( `#fvrtIn${producto.id}`).click(function() {
        alert("El producto ya esta en la lista de favoritos");
    }); 

}

    $( `#productsSelect`).change(function() {
        showSelect();
    }); 

function findProduct(where, idItem){
    return where.find(producto => producto.id == idItem); 
}

function findProductIndex(where, idItem) {
    return where.findIndex(producto => producto.idArticulo === idItem); 
}

function verificarStock(idProd){
    let producto = findProduct(productos, idProd); 
    if (producto.stock === 0){
        $(`#btn${producto.id}`).fadeOut(400);
        $(`#btnStock`+producto.id).delay(400).fadeIn(400);
    }else{
        addItemCarrito(producto)
    }
}

function addItemCarrito(newProduct){
    newProduct.stock -= 1;
    let productoIndex = findProductIndex(carrito, newProduct.id); 
    if (productoIndex >= 0) {
        carrito[productoIndex].cantidad += 1;
    } else {
        carrito.push({idArticulo:newProduct.id, articulo:newProduct.nombre, cantidad:1, precio:newProduct.precio, imagen:newProduct.img});
    }  

    showCart();
    console.log(carrito); 
}

function newFavorito(idItem){
    let isFavorite = findProductIndex(favoritos, idItem);
    let producto = findProduct(productos, idItem); 
    favoritos.push({idArticulo:producto.id, articulo:producto.nombre,imagen:producto.img});
    var fvrtAnimate = $( `#fvrtOut${producto.id}`);
    fvrtAnimate.animate({fontSize:'30px'},200);
    fvrtAnimate.animate({fontSize:'20px'},200);
    fvrtAnimate.animate({fontSize:'30px'},200);
    fvrtAnimate.animate({fontSize:'24px'},200);
    fvrtAnimate.fadeOut(400);
    $(`#fvrtIn${producto.id}`).delay(1200).fadeIn(400);
    console.log(favoritos);
}

function showSelect(){
    const elemento = document.getElementById("products-container");
    $( elemento ).html("");
    var valorOption = document.getElementById('productsSelect').value; 
    console.log(valorOption);

    if(valorOption == 1){addProductItem(productos);}
    else if (valorOption == 2){addProductItem(favoritos);}
    else {addProductItem(carrito);}
}
