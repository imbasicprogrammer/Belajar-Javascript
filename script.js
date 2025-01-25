//Belajar Array | Manipulasi Array
/*
//A. cara pendeklarasian Array
let arr = []; // atau bisa langsung
arr = ["ayam", "ikan", 10, false];

//pemanggilan dan menampilkan array
console.log(arr);
console.log(arr[2]);
*/

//Manipulasi Array
//1. menambah isi array
//untuk menambah array caranya adalah dengan :
//nama_Array[indeks yg ingin ditambah] = "nilai yang ingin ditambah"

// A. menambah isi array dengan looping dan prompt
/*
let limit = parseInt(prompt("masukan limit array : "));
let array = [];
let nama;
for (let i = 0; i < limit; i++) {
  nama = prompt("masukan nama :");
  array[i] = nama;
  console.log(`nama ${i} = ${array[i]}`);
}
console.log(array);
*/

//menampilkan isi array secara fleksibel
/*
let aray = [1, 2, "habib", "uchiha", false];

for (let i = 0; i < aray.length; i++) {
  //memakai method .lenght -> untuk mengetahui jumlah elemen pada array
  console.log(aray[i]);
}*/

//manipulasi Array dengan memakai method
array1 = ["monkey", "D", "luffy", 66];

//1. join
// namaArray.join -> untuk menampilkan array sebagai string dan telah di gabung
console.log("==========join============");
console.log(array1.join()); // -> tanpa separator
console.log(array1.join("-")); // -> dengan separator(pemisah) -> ("-")
console.log(array1.join(" ")); // separator spasi

//2. push dan pop
// namaArray.push("nilai yg mau ditambah") -> push untuk menambahkan nilai ke dalam array di bagian terakhir
array1.push("herkal");
console.log("==========push===========");
console.log(array1.join("-"));

//pop, namaArray.pop() -> untuk menghapus nilai terakhir pada suatu array
array1.pop();
console.log("========pop==========");
console.log(array1.join("-"));

//3. unshift dan shift

//unshift -> untuk menambahkan nilai di awal array
array1.unshift("dodi");
console.log("==========unshift===========");
console.log(array1.join("-"));

//shift -> untuk menghapus nilai pertama pada suatu array
array1.shift();
console.log("==========shift===========");
console.log(array1.join("-"));

//4. slice dan splice

//splice -> menambahkan nilai di tengah atau antara 2 buah indeks lain
// namaArray.splice(indeksAwal, jumlahYgMauDihapus, ElemenBaru1, ..., ElemenBaruN)
array1.splice(2, 0, "ilham"); // -> menambahkan nilai "ilham" di indeks ke dua tanpa mengapus indeks lain
console.log("==========splice===========");
console.log(array1.join(" - "));

array1.splice(2, 3, "ilham", "bolu"); // menambahkan "ilham" dan "bolu" serta menghapus 2 buah nilai di indeks didepannya
console.log(array1.join(" - "));

//slice -> mengiris atau membuat array baru dari irisan array pertama
// namaArray.slice(indeksAwal, indeksAkhir) -> note : indeks akhir tidak akan ditampilkan
let arr2 = array1.slice(1, 3);
console.log("==========slice===========");
console.log(arr2.join(" - "));

//5. method forEach dan map
//forEach -> adalah method yang memiliki fungsi yang hampir mirip dengan for
let angka2 = [1, 2, 4, 5, 6, 8, 7, 3, 9];
console.log("==========forEach===========");
angka2.forEach(function (e) {
  console.log(e);
});

//map -> hampir mirip dengan forEach tapi bisa memakai return
console.log("==========map===========");
let angka3 = angka2.map(function (e) {
  return e * 2; //nilai dari array angka2 dikali 2
});

console.log(angka3.join(" "));

//6.sort
//adalah method yang digunakan untuk mengurutkan nilai pada array
console.log("==========sort===========");
angka2.sort();
console.log(angka2.join(" "));

//note : nilai diurutkan berdasarkan karakter awal
//jadi jika ada puluhan maka nilai puluhan bisa berada di depan. contoh :
let angka4 = [2, 3, 4, 5, 6, 1, 9, 5, 6, 7, 10, 20];
console.log("==========sort dengan puluhan===========");
angka4.sort();
console.log(angka4.join(" "));

//cara memperbaikinya :
angka4.sort(function (a, b) {
  return a - b;
});
console.log("==========sort dengan puluhan yang sudah diperbaiki===========");
console.log(angka4.join(" "));

//7. filter & find
//filter -> untuk mencari nilai pada suatu array dan menampilkan nya dalam bentuk array
let angkaFilter = angka4.filter(function (x) {
  return x > 5; // fungsi akan mengembalikan nilai array yang lebih besar dari 5
});
console.log("==========filter===========");
console.log(angkaFilter.join(" "));

//find -> untuk mencari nilai pada suatu array dan menampilkannya hanya satu nilai saja
angkaFind = angka4.find(function (x) {
  return x > 5; //fungsi akan mengembalikan nilai yang besar dari lima yg pertama kali ditemukan
});
console.log("==========find===========");
console.log(angkaFind);
