let total = 0;

let nuevoImporte = parseInt(prompt("Extraño, ¿a cuanto vendes tu casa?"));
distintoCero(nuevoImporte);

let ubicacion = parseInt(prompt("Ingresa 1 si la propiedad esta en CABA o 2 si esta en GBA/BS AS?"));
locacionVerificacion(ubicacion);

if(ubicacion ==1){
	calcularGastos (nuevoImporte, 80);
} else if(ubicacion ==2){
	calcularGastos (nuevoImporte, 90);
}

alert("Si vendes tu propiedad a $" + nuevoImporte + "vas a estar recibiendo $" + total);

document.write("Hola mundo");


function distintoCero(y){
	while (y==0 || y < 0){
		y = parseInt(prompt("Ingresa un monton mayor a cero"));
	}
	return nuevoImporte=y;
}

function locacionVerificacion(x){
	while (x != 1 && x!=2){
		x = parseInt(prompt("Ingresa una opcion valida"));
	}
	return ubicacion=x;
}

function calcularGastos (z, a){
	total = (z*a)/100;
	return total;
}	

/* ---- CONSTRUCTOR DE OBJETOS ---- */

function propiedad (calle, altura, ciudad, provincia, costo, tipoPropiedad, propietario, titulo){
	this.calle= calle;
	this.altura= altura;
	this.ciudad= ciudad;
	this.provincia=provincia;
	this.costo= costo;
	this.tipoPropiedad=tipoPropiedad;
	this.propietario= propietario;
	this.titulo=titulo;
	this.impuestoRentas=function(costo){
		let costoImpuestoRentas =  (costo * 0.2)100;
	}
	this.impuestoEscritura=function(costo){
		let costoImpuestoRentas =  (costo * 15)/100;
	}
}

function terreno (metrosTotales, pendiente, desmalezado){
	this.metrosTotales= metrosTotales;
	this.pendiente=pendiente;
	this.desmalezado=desmalezado;
}

function vivienda(metrosTotales, metrosCubiertos, metrosSemiCubiertos, antiguedad, tipoVivienda, dormitorios, baños, jardin, pileta, galeria, gym){
	this.metrosTotales= metrosTotales;
	this.metrosCubiertos= metrosCubiertos;
	this.metrosSemiCubiertos= metrosSemiCubiertos;
	this.antiguedad=antiguedad;
	this.tipoVivienda=tipoVivienda;
	this.dormitorios=dormitorios;
	this.baños=baños;
	this.jardin=jardin;
	this.pileta=pileta;
	this.galeria=galeria;
	this.gym=gym;
}

const propiedad1= new propiedad ("Siempre Viva", 123, "Alta Gracia", "Cordoba", 1500, "Terreno", "Homero S.", "Dueño directo");
const propiedad2= new propiedad ("Las Violetas", 1554, "Villa Tupungato", "Cordoba", 250000, "Vivienda", "Kirito", "Declaracion de herederos");
const terreno1= new terreno (150, true, false);
const vivienda1= new vivienda(1200, 300, 150, 10, "Quinta", 5, 2, true, true, true, false);