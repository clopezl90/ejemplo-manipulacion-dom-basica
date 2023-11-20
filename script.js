const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const parrafo = document.querySelector('#result')


function btnOnClick() {
    const resultado = ( input1.value + input2.value);
    parrafo.innerHTML = "El resultado es " + resultado;
}
