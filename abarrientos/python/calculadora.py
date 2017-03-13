
class Calculator(object):
    acumulador = None

    def __init__(self):
        self.acumulador = 0

    def suma(self, numero1, numero2):
        return (numero1 + numero2)

    def sumNumberList(self, numberList=None):
        self.acumulador = 0
        for valor in numberList:
            self.acumulador += valor

        return self.acumulador

    def subtract(self, numero1, numero2):
        return (numero1 - numero2)

    def subtractNumberList(self, numberList=None):
        self.acumulador = 0
        for valor in numberList:
            self.acumulador -= valor

        return self.acumulador

    def product(self, numero1, numero2):
        return (numero1 * numero2)

    def division(self, numero1, numero2):
        return (numero1 / numero2)


class UserInterfaceCalculator(Calculator):

    def menu(self):
        opcion = None
        menu = """

        """
        self.imprimir(menu)
        opcion = raw_input('escoja una opción numerica:')
        return opcion

    def leerValorNumerico(self):
        valor = None
        valor = raw_input('Introdusca un valor numerico:')
        return float(valor)

    def imprimir(self, valor):
        print(valor)

    def imprimeAcumulador(self):
        print(self.acumulador)

    def creaListaNumeros(self, numeros):
        numberList = numeros.split(',')
        listOnFloat = list()
        for numero in numberList:
            listOnFloat.append(float(numero))

        return listOnFloat

    def ejecutaOperacion(self):
        valor1 = None
        valor2 = None
        resultado = None
        valorEntrada = None
        numberList = list()

        operacionID = self.menu()

        if operacionID in (2, 4):
            valorEntrada = raw_input(
                'introdusca una serie de numeros separado por coma'
            )
            numberList = self.creaListaNumeros(valorEntrada)
        else:
            valor1 = self.leerValorNumerico()
            valor2 = self.leerValorNumerico()

        if operacionID is 1:
            resultado = self.suma(valor1, valor2)

        elif operacionID is 2:
            resultado = self.sumNumberList(numberList)

        elif operacionID is 3:
            resultado = self.subtract(valor1, valor2)

        elif operacionID is 4:
            resultado = self.subtractNumberList(numberList)

        elif operacionID is 5:
            resultado = self.product(valor1, valor2)

        elif operacionID is 6:
            resultado = self.division(valor1, valor2)

        self.imprimir(resultado)


calculadora = UserInterfaceCalculator()
calculadora.ejecutaOperacion()
