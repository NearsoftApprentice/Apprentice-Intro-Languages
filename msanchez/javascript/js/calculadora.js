function leerValorNumerico(identificador){
  var cadenaOriginal = document.getElementById(identificador).value;
  var valorNumerico = parseFloat(cadenaOriginal);
  return valorNumerico;
}

function imprimirResultado(resultado){
  document.getElementById("resultado").innerHTML = resultado;
}

function ejecutarOperacion(operacion){
  var valor1 = leerValorNumerico("valor1");
  var valor2 = leerValorNumerico("valor2");
  var resultado = 0;
  if (operacion == "sumarDosNumeros"){
    resultado = sumarDosNumeros(valor1, valor2);
  }
  else if (operacion == "restarDosNumeros"){
    resultado = restarDosNumeros(valor1, valor2);
  }
  else if (operacion == "multiplicarDosNumeros"){
    resultado = multiplicarDosNumeros(valor1, valor2);
  }
  else if (operacion == "dividirDosNumeros"){
    resultado = dividirDosNumeros(valor1, valor2);
  }
  else if (operacion == "sumarElementosListaNumeros"){
    var valorDeEntrada = document.getElementById("listaDeNumeros").value;
    var listaDeNumerosDelUsuario = generaListaDeNumeros(valorDeEntrada);
    resultado = sumarElementosListaNumeros(listaDeNumerosDelUsuario);
  }
  imprimirResultado(resultado);
}

function sumarDosNumeros(valor1, valor2){
  return valor1 + valor2;
}

function restarDosNumeros(valor1, valor2){
  return valor1 - valor2;
}

function multiplicarDosNumeros(valor1, valor2){
  return valor1 * valor2;
}

function dividirDosNumeros(valor1, valor2){
  return valor1 / valor2;
}

function generaListaDeNumeros(cadenaNumeros){
  var listaDeCadenas = cadenaNumeros.split(',');

  var listaFinalDeNumeros = [];
  for (var indice = 0; indice < listaDeCadenas.length; indice++){
    var valorNumerico = parseFloat(listaDeCadenas[indice]);
    listaFinalDeNumeros.push(valorNumerico);
  }
  return listaFinalDeNumeros;
}

function sumarElementosListaNumeros(listaDeNumeros){
  var sumaTotal = 0;
  for (var indice=0; indice < listaDeNumeros.length; indice++){
    sumaTotal += listaDeNumeros[indice];
  }
  return sumaTotal;
}
