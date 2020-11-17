// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btnSuma = document.getElementById("btn-sumar");
var btnResta = document.getElementById("btn-restar");
var btnDivision = document.getElementById("btn-dividir");
var btnMultiplicar = document.getElementById("btn-multiplicar");



var resultado = document.getElementById("resultado")

var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");
// Añadimos el evento click a la variable "btn"

switch (addEventListener) {
    case btnSuma.addEventListener("click"):
        btnSuma.addEventListener("click", function () {
            var n1 = inputUno.value;
            var n2 = inputDos.value;
            resultado.innerHTML = suma(n1, n2);
        });
        function suma(n1, n2) {

            return parseInt(n1) + parseInt(n2);
        }


        break
    case btnResta.addEventListener("click"):
        btnResta.addEventListener("click", function () {
            var n1 = inputUno.value;
            var n2 = inputDos.value;
            resultado.innerHTML = resta(n1, n2);
        });
        function resta(n1, n2) {

            return parseInt(n1) - parseInt(n2);
        }
        break
    case btnDivision.addEventListener("click"):
        btnDivision.addEventListener("click", function () {
            var n1 = inputUno.value;
            var n2 = inputDos.value;
            resultado.innerHTML = dividir(n1, n2);
        });
        function dividir(n1, n2) {

            return parseInt(n1) / parseInt(n2);
        }
        break
    case btnMultiplicar.addEventListener("click"):
        btnMultiplicar.addEventListener("click", function () {
            var n1 = inputUno.value;
            var n2 = inputDos.value;
            resultado.innerHTML = multi(n1, n2);
        });
        function multi(n1, n2) {

            return parseInt(n1) * parseInt(n2);
        }
        break

    default:
        Sentencias a ejecutar si el valor no es ninguno de los anter
}