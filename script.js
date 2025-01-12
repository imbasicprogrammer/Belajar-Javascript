//Belajar Operasi String

//1. mengambil satu karakter dari sebuah string
//memakai charAt

let dataString = "abcdef";

let DataChar = dataString.charAt(0);
console.log(`data string indeks 0 : ${DataChar}`);

DataChar = dataString.charAt(1);
console.log(`data string indeks 1 : ${DataChar}`);

DataChar = dataString.charAt(2);
console.log(`data string indeks 2 : ${DataChar}`);

DataChar = dataString.charAt(3);
console.log(`data string indeks 3 : ${DataChar}`);

DataChar = dataString.charAt(4);
console.log(`data string indeks 4 : ${DataChar}`);

DataChar = dataString.charAt(5);
console.log(`data string indeks 5 : ${DataChar}`);

//2. Menyambung string dengan concat
let nama = "monkey";
let namaTengah = "D";
let namaLengkap = nama.concat(" ", namaTengah, " Luffy");
console.log(namaLengkap);

//3. Mengambil Index dengan indexof
let dataIndex = dataString.indexOf("a");
console.log(`index dari a = ${dataIndex}`);

dataIndex = dataString.indexOf("b");
console.log(`index dari b = ${dataIndex}`);

dataIndex = dataString.indexOf("c");
console.log(`index dari c = ${dataIndex}`);

dataIndex = dataString.indexOf("d");
console.log(`index dari d = ${dataIndex}`);

dataIndex = dataString.indexOf("e");
console.log(`index dari e = ${dataIndex}`);

dataIndex = dataString.indexOf("f");
console.log(`index dari f = ${dataIndex}`);

//4 substring -> mengambil string berdasarkan index keberapa - index keberapa
let DataNama = "roronoa zoro";
console.log(DataNama);
let DataZoro = DataNama.substring(0, 8);
console.log(DataNama.substring(8, 0)); //meski dibalik tapi tak berpengaruh

//5. slice -> Memotong string
DataNama = "god D sogeking usopp";
let DataUsop = DataNama.slice(6, 15);
console.log(DataUsop);

console.log(DataNama.slice(15, 6)); //jika dibalik maka string menghilang

//6 replace / ganti string
let dataLengkap = DataNama.replace("sogeking", "monkey");
console.log(dataLengkap);

//7 toLowerCase -> mengubah string menjadi kecil
console.log(DataNama.toLowerCase());

//8 uppercase -> mengubah string menjadi kapital
console.log(DataNama.toUpperCase());

//9 Extract data number dari string
let dataString2 = "10";
let tipeData = typeof dataString2;
console.log(`${dataString2} dengan tipe data : ${tipeData}`);
let dataInteger = parseInt(dataString2);
tipeData = typeof dataInteger;
console.log(`${dataInteger} dengan tipe data : ${tipeData}`); //bilangan bulat (integer)

let dataString3 = "10.45";
tipeData = typeof dataString3;
console.log(`${dataString3} dengan tipe data : ${tipeData}`);
let dataFloat = parseFloat(dataString3);
tipeData = typeof dataFloat;
console.log(`${dataFloat} dengan tipe data : ${tipeData}`); //bilangan decimal (Float)
