if (carrito.length===0) {
        bolsaVacia();
}

function showCart () {
    if (carrito.length===0) {
        deleteHTMLCarrito();
        bolsaVacia();
    } else{
        deleteHTMLCarrito();
        for (var i = 0; i < carrito.length; i++) {
            addHTMLItemCarrito (carrito[i]);
        }
    } 
}

function getRootContainerCarrito() {
    return document.querySelector("#contenedorCarrito")
}

function addNewElemetCarrito(tag) {
    return document.createElement(tag)
}

function addHTMLItemCarrito (producto) {
    const container = getRootContainerCarrito();
    const childContainer = addNewElemet('div');
    const cardFirstContainer = addNewElemet('div');
    const imgCardContainer = addNewElemet('div');
    const imgCard = addNewElemet('img');
    const cardSecondContainer = addNewElemet('div');
    const bodyCardContainer = addNewElemet('div');
    const svgTrash = addNewElemet('svg');
    const firstPath = addNewElemet('path');
    const secondPath = addNewElemet('path');
    const titleItem = addNewElemet('p');
    const quantityItem = addNewElemet('p');
    const priceItem = addNewElemet('p');

    childContainer.className = "card mb-3",
    childContainer.setAttribute("style","max-width: 540px;");
    cardFirstContainer.className = "row g-0";
    imgCardContainer.className = "col-md-4";
    imgCard.className = "img-fluid rounded-start";
    imgCard.setAttribute("src",producto.imagen);
    cardSecondContainer.className = "col-md-8";
    bodyCardContainer.className = "card-body";
    svgTrash.className = "bi bi-trash";
    svgTrash.setAttribute("value",producto.imagen);
    svgTrash.setAttribute("xmlns","http://www.w3.org/2000/svg");
    svgTrash.setAttribute("width","16");
    svgTrash.setAttribute("height","16");
    svgTrash.setAttribute("fill","currentColor");
    svgTrash.setAttribute("viewBox","0 0 16 16");
    firstPath.setAttribute("d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z");
    secondPath.setAttribute("fill-rule","evenodd");
    secondPath.setAttribute("d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z");
    titleItem.className = "card-title";
    titleItem.textContent = producto.producto;
    quantityItem.className = "card-text text-muted";
    priceItem.className = "card-text text-muted";
    quantityItem.textContent = producto.cantidad;
    priceItem.textContent = "$ "+producto.precio;

    container.appendChild(childContainer);
    childContainer.appendChild(cardFirstContainer);
    cardFirstContainer.appendChild(imgCardContainer);
    imgCardContainer.appendChild(imgCard);
    cardFirstContainer.appendChild(cardSecondContainer);
    cardSecondContainer.appendChild(bodyCardContainer);
    bodyCardContainer.appendChild(svgTrash);
    svgTrash.appendChild(firstPath);
    svgTrash.appendChild(secondPath);
    bodyCardContainer.appendChild(titleItem);
    bodyCardContainer.appendChild(quantityItem);
    bodyCardContainer.appendChild(priceItem);
}

function bolsaVacia(){
    const container = getRootContainerCarrito();
    const childText = addNewElemetCarrito('p');

    childText.setAttribute("id","bolsaVacia");
    childText.textContent = "Ups! No tienes productos en la bolsa";

    container.appendChild(childText);
}

function deleteHTMLCarrito(){
    const elemento = document.getElementById("contenedorCarrito");
    $( elemento ).html("");
}


              