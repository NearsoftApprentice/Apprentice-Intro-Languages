
function ejecutarOperacion (operacion) {
    switch (operacion) {
    case sumarDosNumeros:
        break;
    case restarDosNumeros:
        break;
    case multiplicarDosNumeros:
        break;
    case dividirDosNumeros:
        break;
    default:
        break;
    }   
}


function leerVariables(identificador) {
    
	var valor1 = document.getElementById("valor1").value;
    return valor1;

}

function imprimirResultado() {
	var valor1 = document.getElementById("valor1").innerHTML();
    
}



function sumarDosNumeros(valor1, valor2) {
	
	return valor1 + valor2;
}


function restarDosNumeros(valor1, valor2) {
	
	return valor1 - valor2;
}


function multiplicarDosNumeros(valor1, valor2){
	
	return valor1 * valor2;	
}

function dividirDosNumeros(valor1, valor2){
	
	return valor1 / valor2;	
}

function sumarTodosDeLista(listaDeNumeros) {
var sumatTotal = 0;
for(var index=0;i<listaDeNumeros;index++)
    
}
