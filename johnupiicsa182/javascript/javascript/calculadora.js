
function leerNumerico(identificador){
	var cadenaOriginal=document.getElementById(identificador).value;
	var valorNumerico=parseFloat(cadenaOriginal);
	return valorNumerico;
}
function ejecutar(operacion){
	var valor1=leerNumerico("valor1");
	var valor2=leerNumerico("valor2");
	var resultado=0;
	if(operacion=="sumarDosNumeros"){
		resultado=sumarDosNumeros(valor1,valor2);
	}else if(operacion=="restarDosNumeros"){
		resultado=restarDosNumeros(valor1,valor2);
	}else if(operacion=="multiplicarDosNumeros"){
		resultado=multiplicarDosNumeros(valor1,valor2);
	}else {
		resultado=dividirDosNumeros(valor1,valor2);
	}
	imprimirResultado(resultado);
}
function imprimirResultado(resultado){
	document.getElementById("resultado").innerHTML=resultado;
}
function sumarDosNumeros(valor1, valor2){
		return valor1+valor2;
		}
function restarDosNumeros(valor1, valor2){
		return valor1-valor2;
		}
function multiplicarDosNumeros(valor1, valor2){
		return valor1*valor2;
		}
function dividirDosNumeros(valor1, valor2){
		return valor1/valor2;
		}
function generaListadeNumeros(cadenaDeNumeros){
	var listaDeCadenas=cadenaDeNumeros.split(",");
	var listaFinal=[];
	for(var index=0; index<listaDeCadenas.length; index++){
		var valorNumerico=parseFloat(listaDeCadenas[index]);
		listaFinal.push(valorNumerico);
	}
}
function sumarTodosdeLista(listaDeNumero){
	var sumarTotal=0;
	for(var index=0; i< listaDeNumero.length; index++){
		sumarTotal+=listaDeNumero[index];
	}
}

