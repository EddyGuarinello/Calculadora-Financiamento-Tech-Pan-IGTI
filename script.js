const calcularButton = document.querySelector("#calcularButton");

const valor = document.querySelector("#valor");
const prazoAnos = document.querySelector("#prazoAnos");
const jurosAno = document.querySelector("#jurosAno");

const prazoMeses = document.querySelector("#prazoMeses");
const jurosMeses = document.querySelector("#jurosMeses");
const jurosAcumulados = document.querySelector("#jurosAcumulados");

const amortArray = document.querySelectorAll('.amortArray');
const jurosArray = document.querySelectorAll('.jurosArray');
const totalArray = document.querySelectorAll('.totalArray');

let totalJuros

calcularButton.addEventListener("click", function () {
  document.querySelector(".resultWrap").style.display="block"
  totalJuros=0
  prazoMeses.value = prazoAnos.value * 12
  jurosMeses.value = (1 + Number(jurosAno.value))**(1/12)-1

 
  for (let cont=0; cont<jurosArray.length; cont++){
    amortArray[cont].innerText = (valor.value / prazoMeses.value).toFixed(2)
    jurosArray[cont].innerText =((valor.value - (cont*valor.value/prazoMeses.value))*jurosMeses.value).toFixed(2)
    totalArray[cont].innerText = (Number(amortArray[cont].innerText) + Number(jurosArray[cont].innerText)).toFixed(2)
  }

  for (let i = 0; i<prazoMeses.value; i++){
    totalJuros += (valor.value - (i*valor.value/prazoMeses.value))*jurosMeses.value
  }

  jurosAcumulados.value = totalJuros.toFixed(2);
});
