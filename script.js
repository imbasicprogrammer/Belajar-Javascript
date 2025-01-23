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
