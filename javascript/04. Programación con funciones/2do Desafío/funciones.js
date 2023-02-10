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


