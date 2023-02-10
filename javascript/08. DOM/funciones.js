/* ---- CLASES y OBJETOS ---- */

class Servicio {
	constructor (tipo, costoComensal, costoMayorista){
		this.tipo= tipo;
		this.costoComensal=costoComensal;
		this.costoMayorista=costoMayorista;
	}
}

class Pedido{
	constructor (usuario, producto, cantidad, fechaEntrega, total){
		this.usuario= usuario;
		this.producto=producto;
		this.cantidad=cantidad;
		this.fechaEntrega=fechaEntrega;
		this.total=total;
	}
}

const servicio1= new Servicio ("Dulce", 150, 125);
const servicio2= new Servicio ("Salado", 180, 150);
const servicio3= new Servicio ("Mesa Completa", 310, 290);

/* ---- ARRAYS ----*/
const pedidos = [{usuario:"Erika",producto:1,cantidad:10,total:1500},{usuario:"Nahuel",producto:3,cantidad:50,total:14500},{usuario:"Laura",producto:2,cantidad:25,total:3750}];

/* ---- VARIABLES ---- */

let servicioTipo;
let totalServicio = 0;

/* ---- FLUJO DE PEDIDO ----*/


let confirmaPedido = parseInt(prompt(""));
datoVerificacion(confirmaPedido);
confirmacionPedido(confirmaPedido);

if(pedidos.length > 4){
	console.log("Suficientes pedidos por hoy.")
} else{
	console.log("Todavia hay lugar.")
}

ordenar(pedidos);
console.log("Pedido por orden de prioridad:");
console.log(pedidos);

/* ---- FUNCIONES ---- */

function servicioEleccion (servicioId){
	servicioTipo = parseInt(servicioId);
}

function recopilaInfo (){
	let nombre = document.getElementById('inputName1').value;
	let comensales = parseInt(document.getElementById('inputComensales1').value);
	distintoCero(comensales);
	comensalesVerificacion(comensales);

	declaracionServicio (servicioTipo);
	console.log(nombre,comensales,servicioTipo);
}

function distintoCero(y){
	while (y==0 || y < 0){
		y = parseInt(prompt("Ingresa un monton mayor a cero"));
	}
	return comensales=y;
}

function comensalesVerificacion(z){
	if(z<10){
		alert("Ups! No tomamos pedidos para menos de 10 personas. Lo sentimos!")
	} else if (z>100){
		alert("Ups! No tomamos pedidos para más de 100 personas desde aquí. Nos podes mandar un mensaje desde la pestaña de Contacto para coordinar tu pedido. Gracias!")
		contactoRedireccion();
	} else{
		return comensales=z;
	}
}

function datoVerificacion(x){
	while (x != 1 && x!=2 && x!=3){
		x = parseInt(prompt("Ingresa una opcion valida"));
	}
	return servicioTipo=x;
}

function declaracionServicio (servicioTipo){
	if(servicioTipo ==1){
		calcularGastos (comensales, servicio1);
	} else if(servicioTipo ==2){
		calcularGastos (comensales, servicio2);
	} else if(servicioTipo ==3){
		calcularGastos (comensales, servicio3);
	}
}

function calcularGastos (z, a){
	if(comensales>20){
		totalServicio = (comensales*a.costoMayorista);
	} else {
		totalServicio = (comensales*a.costoComensal);
	}
	addHtmlModal("El servicio para " + comensales + " personas costaria $" + totalServicio + " s/IVA. Desea confirmar su pedido? 1: Si | 2 : No | 3: Deseo comunicarme con un representante.");
}	

function confirmacionPedido (confirmaPedido){
	let b = parseInt(confirmaPedido);
	if(b ==1){
		pedidos.push({usuario:nombre, producto:servicioTipo, cantidad:comensales, total:totalServicio});
		alert("Gracias por realizar tu pedido!");
	} else if(b ==2){
		alert("Gracias por visitarnos. Te esperamos la proxima!");
	} else if(b ==3){
		alert("Dejanos tu consulta en nuestra seccion de Contacto y en breve nos pondremos en contacto con vos!");
		//Redireccionamiento tras 5 segundos
		setTimeout(contactoRedireccion(), 5000 );
	}
}

function contactoRedireccion (){
	window.location.href="https://google.com/";
}

function borrarContenido(){
	document.getElementById('inputName1').value = "";
	document.getElementById('inputComensales1').value = "";
}

function reiniciarConsulta(){

}

function ordenar(pedidos) {
    var length = pedidos.length;  
    for (var x = 0; x < length; x++) { 
        for (var y = 0; y < (length - x - 1); y++) { 
            if(pedidos[y].total < pedidos[y+1].total) {
                var prueba = pedidos[y]; 
                pedidos[y] = pedidos[y+1]; 
                pedidos[y+1] = prueba; 
            }
        }        
    }
}




function addHtmlModal() {
    const container = getRootContainer();
    const childContainer = addNewElemet('p');

    childContainer.className = "person-item";
  
    container.appendChild(childContainer);

}


