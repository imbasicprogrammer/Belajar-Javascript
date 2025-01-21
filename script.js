//Belajar Function
/*
//1. Fungsi sederhana menjumlahkan dua buah volume kubus
let kubusA, kubusB;

kubusA = parseInt(prompt("masukan nilai kubub a : "));
kubusB = parseInt(prompt("masukan nilai kubus b : "));

function MenghitungVolumeKubus(a, b) {
  let rumus1, rumus2, hasil;
  rumus1 = a ** 3;
  rumus2 = b ** 3;
  hasil = rumus1 + rumus2;
  return hasil;
}

alert("hasilnya adalah = " + MenghitungVolumeKubus(kubusA, kubusB));
console.log(`hasil dari penjumlahan volume kubus A dan volume kubus B adalah = ${MenghitungVolumeKubus(kubusA, kubusB)}`);
*/

//2. Pseudo Variabel Arguments -> tipe data array
// arguments = [1,2,3,"a",true] -> masing masing nilai ditempatkan dalam sebuah indeks dari 0
//arguments dapat digunakan untuk membuat function jadi lebih fleksibel, contoh :

function tambah() {
  //memakai perulangan
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
    //-> ini akan menambah hasil dengan nilai di setiap indeks arguments secara berulang sebanyak panjang argument
  }

  return hasil;
}

console.log(`penjumlahan dengan function tambah = ${tambah(2, 3, 6)}`);
