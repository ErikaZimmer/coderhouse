
let total = 0;

for (let i = 0; i < 5; i++) {

	let nuevoNumero = parseInt(prompt("Extraño, danos un numero"));
	while (nuevoNumero==0){
		nuevoNumero = parseInt(prompt("Ingresaste 0, ingresa otro numero"));
	}
	
	total = total + nuevoNumero;
	
}

alert("La suma de los numeros que ingresaste es: " + total);


document.write("Hola mundo");