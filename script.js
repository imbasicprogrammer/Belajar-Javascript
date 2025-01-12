//Belajar Tipe data Number (float, integer)
//bigInt -> rentang nilai di atas number

//contoh
let angka = 10; //integer
console.log(angka);
console.log(typeof angka);

angka = 10.5; //float
console.log(angka);
console.log(typeof angka);

angka = 123456789123456789912345n; //bigInt
console.log(angka);
console.log(typeof angka);

//cara menggunakan tipe data number
let nomor = 10.2;
let nomorInt = parseInt(nomor); //parseInt mengubah float menjadi integer
console.log(nomorInt);

nomor = 10.2;
let nomorFloat = parseFloat(nomor); //parseFloat mengubah  integer menjadi float
console.log(nomorFloat);

dataString = "10.20";
let dataNumber = parseFloat(dataString) + 20; //parseFloat mengubah data string  menjadi number
console.log(dataNumber);
