let total = 0;

let nuevoImporte = parseInt(prompt("Extraño, ¿a cuanto vendes tu casa?"));
distintoCero(nuevoImporte);

calcularGastos (nuevoImporte);

alert("Si vendes tu propiedad a $" + nuevoImporte + " vas a estar recibiendo $" + total);

function distintoCero(y){
	while (y==0 || y < 0){
		y = parseInt(prompt("Ingresa un monton mayor a cero"));
	}
	return nuevoImporte=y;
}

function calcularGastos (z){
	total = (z*90)/100;
	return total;
}	


