function leerValorNumerico(identificador){

	var cadenaOriginal = document.getElementById(identificador).value;

	var valorNumerico = parseFloat(cadenaOriginal);

	return valorNumerico;


}



function ejecutarOperacion(operacion){

	var valor1=leerValorNumerico("valor1");
	var valor2=leerValorNumerico("valor2");

	var resultado = 0;

	if(operacion=="sumar"){
		resultado = sumar(valor1,valor2);
	}else if(operacion=="restar"){
		resultado = resta(valor1,valor2);
	}else if(operacion=="dividir"){
		resultado = dividir(valor1,valor2);
	}else if(operacion=="multiplicar"){
		resultado = multiplicar(valor1,valor2);
	}else if(operacion== "sumarLista"){
		var input = document.getElementById("listaDeNumeros").value;
		var listaDeNumerosDeUSuario=generaListaDeNumeros(input);
		resultado = sumarLista(listaDeNumerosDeUSuario);
	}

	imprimirResultado(resultado);
}

 
function imprimirResultado(resultado){

	document.getElementById("resultado").innerHTML=resultado;
}


function sumar(valor1, valor2){


	return valor1 + valor2;


}

function restar(valor1, valor2){


	return valor1 - valor2;


}

function dividir(valor1, valor2){


	return valor1 / valor2;


}
function multiplicar(valor1, valor2){


	return valor1 * valor2;


}

function generaListaDeNumeros(cadenaDeNumeros){

 var listaDeCadenas = cadenaDeNumeros.split(",");

 var listaFinalDeNumeros = [];

 for(var index=0; index < listaDeCadenas.length; index++){

 	var numero = parseFloat(listaDeCadenas[index]);

 	listaFinalDeNumeros.push(numero);

	 }

	 return listaFinalDeNumeros;

}

function sumarLista(listaDeNumeros){

	var sumaTotal = 0;

	for(var index=0; index < listaDeNumeros.length; index++){
		sumaTotal += listaDeNumeros[index];
	}

	return sumaTotal;
}