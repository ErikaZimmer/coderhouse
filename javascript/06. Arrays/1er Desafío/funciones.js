/* ---- CONSTRUCTOR DE OBJETOS ---- */

class Servicio {
	constructor (tipo, costoComensal, costoMayorista){
		this.tipo= tipo;
		this.costoComensal=costoComensal;
		this.costoMayorista=costoMayorista;
	}
}

class Pedido{
	constructor (usuario, producto, cantidad, total){
		this.usuario= usuario;
		this.producto=producto;
		this.cantidad=cantidad;
		this.total=total;
	}
}

const servicio1= new Servicio ("Dulce", 150, 125);
const servicio2= new Servicio ("Salado", 180, 150);
const servicio3= new Servicio ("Mesa Completa", 310, 290);

/* ---- Array pedidos ----*/
const pedidos = [{usuario:"Erika",producto:1,cantidad:10,total:1500},{usuario:"Nahuel",producto:3,cantidad:50,total:14500},{usuario:"Laura",producto:2,cantidad:25,total:3750}];

/* ---- Variable ---- */
let totalServicio = 0;

let nombre = prompt("Extraño, ¿como te llamas?");
let comensales = parseInt(prompt(nombre + ", ¿servicio para cuantas personas?"));
distintoCero(comensales);

let servicioTipo = parseInt(prompt("¿Que tipo de mesa? Ingresa 1 para dulce, 2 para salado y 3 para ambas"));
servicioVerificacion(servicioTipo);

if(servicioTipo ==1){
	calcularGastos (comensales, servicio1);
} else if(servicioTipo ==2){
	calcularGastos (comensales, servicio2);
} else if(servicioTipo ==3){
	calcularGastos (comensales, servicio3);
}

alert("El servicio para" + comensales + " personas costaria $" + totalServicio + " s/IVA.");

pedidos.push({usuario:nombre, producto:comensales, cantidad:servicioTipo, total:totalServicio});

if(pedidos.length > 4){
	console.log("Suficientes pedidos para esta fecha.")
} else{
	console.log("Todavia hay lugar.")
}

console.log(pedidos);

document.write("Hola mundo");

function distintoCero(y){
	while (y==0 || y < 0){
		y = parseInt(prompt("Ingresa un monton mayor a cero"));
	}
	return comensales=y;
}

function servicioVerificacion(x){
	while (x != 1 && x!=2 && x!=3){
		x = parseInt(prompt("Ingresa una opcion valida"));
	}
	return servicioTipo=x;
}

function calcularGastos (z, a){
	if(comensales>20){
		totalServicio = (comensales*a.costoMayorista);
	} else {
		totalServicio = (comensales*a.costoComensal);
	}
	return totalServicio;
}	


