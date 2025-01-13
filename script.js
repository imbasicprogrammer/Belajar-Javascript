//Belajar bikin kalkulator

// dengan menggunakan valueAsNumber dan type="number"
let angka_1, angka_2, hasil;
/*
document.getElementById("button_jumlah").onclick = function () {
  angka_1 = document.getElementById("angka_1").valueAsNumber;  // valueAsNumber -> tipe data ditampilkan sebagai number
  console.log(`angka pertama = ${angka_1} tipe = ${typeof angka_1}`);
  angka_2 = document.getElementById("angka_2").valueAsNumber;
  console.log(`angka kedua = ${angka_2} tipe = ${typeof angka_2}`);
  hasil = angka_1 + angka_2;
  console.log(`hasil penjumlahan = ${hasil}`);

  document.getElementById("hasil").textContent = hasil;
};
*/

//dengan menggunakan parsing -> parseFloat, parseInt
document.getElementById("button_jumlah").onclick = function () {
  angka_1 = document.getElementById("angka_1").value; // value -> tipe data ditampilkan sebagai string
  console.log(`angka pertama = ${angka_1} tipe = ${typeof angka_1}`);
  angka_2 = document.getElementById("angka_2").value;
  console.log(`angka kedua = ${angka_2} tipe = ${typeof angka_2}`);
  hasil = parseFloat(angka_1) + parseFloat(angka_2);
  console.log(`hasil penjumlahan = ${hasil}`);

  document.getElementById("hasil").textContent = hasil;
};
