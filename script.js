let angka1, angka2, hasil;

//button tambah/jumlah
document.getElementById("button_jumlah").onclick = function () {
  angka1 = document.getElementById("angka_1").value;
  console.log(`angka1 = ${angka1} tipe = ${typeof angka1}`);
  angka2 = document.getElementById("angka_2").valueAsNumber;
  console.log(`angka2 = ${angka2} tipe = ${typeof angka2}`);
  hasil = parseFloat(angka1) + angka2;
  console.log(`${angka1} + ${angka2} = ${hasil}`);

  document.getElementById("hasil").textContent = hasil;
};

//button kurang
document.getElementById("button_kurang").onclick = function () {
  angka1 = document.getElementById("angka_1").value;
  console.log(`\nangka1 = ${angka1} tipe = ${typeof angka1}`);
  angka2 = document.getElementById("angka_2").valueAsNumber;
  console.log(`angka2 = ${angka2} tipe = ${typeof angka2}`);
  hasil = parseFloat(angka1) - angka2;
  console.log(`${angka1} - ${angka2} = ${hasil}`);

  document.getElementById("hasil").textContent = hasil;
};

//button kali
document.getElementById("button_kali").onclick = function () {
  angka1 = document.getElementById("angka_1").value;
  console.log(`\nangka1 = ${angka1} tipe = ${typeof angka1}`);
  angka2 = document.getElementById("angka_2").valueAsNumber;
  console.log(`angka2 = ${angka2} tipe = ${typeof angka2}`);
  hasil = parseFloat(angka1) - angka2;
  console.log(`${angka1} X ${angka2} = ${hasil}`);

  document.getElementById("hasil").textContent = hasil;
};

//button bagi
document.getElementById("button_bagi").onclick = function () {
  angka1 = document.getElementById("angka_1").value;
  console.log(`\nangka1 = ${angka1} tipe = ${typeof angka1}`);
  angka2 = document.getElementById("angka_2").valueAsNumber;
  console.log(`angka2 = ${angka2} tipe = ${typeof angka2}`);
  hasil = parseFloat(angka1) / angka2;
  console.log(`${angka1} / ${angka2} = ${hasil}`);

  document.getElementById("hasil").textContent = hasil;
};
