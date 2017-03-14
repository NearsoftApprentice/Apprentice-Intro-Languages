var __extends, Calculator, UserInterfaceCalculator;

__extends = void 0;
Calculator = void 0;
UserInterfaceCalculator = void 0;

__extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

Calculator = (function () {

    function Calculator() {
    }

    Calculator.prototype.sum = function (numberOne, numberTwo) {
        return (numberOne + numberTwo);
    };

    Calculator.prototype.sumNumberList = function (numberList) {
        for (var index in numberList) {
            this.accumulator += numberList[index];
        }
        return this.accumulator;
    };

    Calculator.prototype.substract = function (numberOne, numberTwo) {
        return (numberOne - numberTwo);
    };

    Calculator.prototype.substractNumberList = function (numberList) {
        this.accumulator = 0;
        for (var index in numberList) {
            this.accumulator -= numberList[index];
        }
        return this.accumulator;
    };

    Calculator.prototype.product = function (numberOne, numberTwo) {
        return (numberOne * numberTwo);
    };

    Calculator.prototype.divicion = function (numberOne, numberTwo) {
        return (numberOne / numberTwo);
    };

    return Calculator;
}());

UserInterfaceCalculator = (function (_super) {
    __extends(UserInterfaceCalculator, _super);

    function UserInterfaceCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }

    UserInterfaceCalculator.prototype.leerValorNumerico = function (selector) {
        var cadenaOriginal;
        var valorNumerico;
        cadenaOriginal = document.getElementById(selector).value;
        valorNumerico = parseFloat(cadenaOriginal);
        return valorNumerico;
    };

    UserInterfaceCalculator.prototype.imprimirResultado = function (numero) {
        document.getElementById("resultado").innerHTML = numero;
    };
    
    UserInterfaceCalculator.prototype.creaListaNumeros = function (numeros) {
        var arrayListNumberOnString = numeros.split(',');
        var arrayListOnFloat = new Array();

        for (var index in arrayListNumberOnString) {
            arrayListOnFloat.push(parseFloat(arrayListNumberOnString[index]));
        }
        return arrayListOnFloat;
    };

    UserInterfaceCalculator.prototype.ejecutarOperacion = function (operacionId) {
        var valor1;
        var valor2;
        var resultado;
        var valorDeEntrada;
        var arrayList;

        valor1 = this.leerValorNumerico("");
        valor2 = this.leerValorNumerico("");

        switch (true) {
            case operacionId === 1:
                resultado = this.sum(valor1, valor2);
                break;
            case operacionId === 2:
                valorDeEntrada = document.getElementById("listaDeNumeros").value;
                arrayList = this.creaListaNumeros(valorDeEntrada);
                resultado = this.sumNumberList(arrayList);
                break;
            case operacionId === 3:
                resultado = this.substract(valor1, valor2);
                break;
            case operacionId === 4:
                valorDeEntrada = document.getElementById("listaDeNumeros").value;
                arrayList = this.creaListaNumeros(valorDeEntrada);
                resultado = this.substractNumberList(new Array());
                break;
            case operacionId === 5:
                resultado = this.product(valor1, valor2);
                break;
        }
        
        this.imprimirResultado(resultado);
    };

    return UserInterfaceCalculator;
}(Calculator));
