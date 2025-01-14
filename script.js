// Latihan Operator

let aritmatikaAngka1, operatorAritmatika, aritmatikaAngka2, hasilAritmatika;

document.getElementById("buttonAritmatika").onclick = function () {
  aritmatikaAngka1 = document.getElementById("aritmatikaAngka1").value;
  aritmatikaAngka2 = document.getElementById("aritmatikaAngka2").valueAsNumber;
  operatorAritmatika = document.getElementById("operatorAritmatika").value;

  hasilAritmatika = eval(`${parseFloat(aritmatikaAngka1)} ${operatorAritmatika} ${aritmatikaAngka2}`); //eval -> menghitung string di dalamnya
  console.log(`${aritmatikaAngka1} ${operatorAritmatika} ${aritmatikaAngka2} = ${hasilAritmatika}`);
  document.getElementById("hasilAritmatika").textContent = hasilAritmatika;
};

let Bool1, operatorLogika, Bool2, hasilLogika;

document.getElementById("buttonLogika").onclick = function () {
  Bool1 = document.getElementById("Bool1").value;
  Bool2 = document.getElementById("Bool2").valueAsNumber;
  operatorLogika = document.getElementById("operatorLogika").value;

  hasilLogika = eval(`${Bool1} ${operatorLogika} ${Bool2}`); //eval -> menghitung string di dalamnya
  console.log(`${Bool1} ${operatorLogika} ${Bool2} = ${hasilLogika}`);
  document.getElementById("hasilLogika").textContent = hasilLogika;
};
