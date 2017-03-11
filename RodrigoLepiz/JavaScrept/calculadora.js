function leerValorNumerico(identificador){
	var cadenaOriginal = document.getElementById(identificador).value;
	var valorNumerico = parseFloat(cadenaOriginal);
	return valorNumerico;
}
function ejecutarOperacion(operacion){
	var resultado = 0;
	if (operacion == "sumarDosNumeros"){
		sumarDosNumeros(valor1,valor2);
	} else if (operacion == "restarDosNumeros"){
		restarDosNumeros(valor1,valor2);
	} else if (operacion == "multiplicarDosNumeros"){
		multiplicarDosNumeros(valor1, valor2);
	} else {// operacion por defecto
		resultado = dividirDosNumeros(valor1, valor2);
	}
	imprimirResultado(resultado);
}
function imprimirResultado(resultado){
	document.getElementById("resultado").innertHTML = resultado;
}
function sumarDosNumeros(valor1,valor2){
	return valor1 + valor2;
}
function restarDosNumeros(valor1,valor2){
	return valor1 - valor2;
}
function multiplicarDosNumeros(valor1,valor2){
	return valor1 * valor2;
}
function dividirDosNumeros(valor1,valor2){
	return valor1 / valor2;
}
function sumarListaDeNumeros(cadenaDeNumeros){
	var listaDeCadenas= cadenaDeNumeros.split(",");
	var listaFinalDeNumeros = [];
	for (var indice = 0; indice < listaDeCadenas.length; indice ++){
		var valorNumericoDeCadena =parseFloat(listaDeCadenas[indice]);
		listaFinalDeNumeros.push(valorNumericoDeCadena);
	}
}
function sumarTodosDeLista(listaDeNumeros){
	var sumaTotal = 0;
	for(var indice = 0; indice <listaDeNumeros.length; indice ++){
		sumaTotal += listaDeNumeros[index];
	}
	return sumaTotal;
}