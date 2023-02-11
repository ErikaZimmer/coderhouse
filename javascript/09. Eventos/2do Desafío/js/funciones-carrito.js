bolsaVacia();


function addProductItem () {
    if (carrito.length===0) {
        bolsaVacia();
    } else{
        deleteHTMLMensajeBolsaVacia();
        for (var i = 0; i < carrito.length; i++) {
            addHTMLItemCarrito (carrito[i]);
        }
    }
}



function getRootContainerCarrito() {
    return document.querySelector("#contenedorCarrito")
}

function addHTMLItemCarrito (producto) {
    const container = getRootContainerCarrito();
    const childContainer = addNewElemet('div');
    const cardFirstContainer = addNewElemet('div');
    const imgCardContainer = addNewElemet('div');
    const imgCard = addNewElemet('img');
    const cardSecondContainer = addNewElemet('div');
    const bodyCardContainer = addNewElemet('div');
    const titleItem = addNewElemet('p');
    const quantityItem = addNewElemet('p');
    const priceItem = addNewElemet('p');

    childContainer.className = "card mb-3 itemCarrito",
    childContainer.setAttribute("style","max-width: 540px;");
    cardFirstContainer.className = "row g-0";
    imgCardContainer.className = "col-md-4";
    imgCard.className = "img-fluid rounded-start";
    imgCard.setAttribute("src",producto.imagen);
    cardSecondContainer.className = "col-md-8";
    bodyCardContainer.className = "card-body";
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
    bodyCardContainer.appendChild(titleItem);
    bodyCardContainer.appendChild(quantityItem);
    bodyCardContainer.appendChild(priceItem);
}

function bolsaVacia(){
    const container = getRootContainerCarrito();
    const childText = addNewElemet('p');

    childText.setAttribute("id","bolsaVacia");
    childText.textContent = "Ups! No tienes productos en la bolsa";

    container.appendChild(childText);
}

function deleteHTMLMensajeBolsaVacia(){
    const elemento = document.getElementById("bolsaVacia");
    elemento.parentElement.removeChild(elemento);
}

function deleteHTMLMensajeItemBolsa(){
    const elemento = document.getElementById("itemCarrito");
    elemento.parentElement.removeChild(elemento);
}

              