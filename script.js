//Belajar Object
//object adalah tipe data pada javascript yang sama seperti array namun lebih powerful
//object bekerja dengan menyimpan nilai data yang berbeda-beda dalam suatu properti yang memiliki nama
// berbeda dengan array yang menyimpan nilai dalam indeks

//contoh kerangka object, dengan cara Object literal
var namaObject = {
  nama: "muhammad habib", //properti dengan nama, nama yang menyimpan string
  usia: 18, //properti dengan nama usia yang menyimpan integer
  ips: [3.4, 3.5, 3.6, 3.7], //properti dengan nama usia yang menyimpan ip persemester
  ipKumulatif: function () {
    var total = 0;
    var ipSemester = this.ips;
    for (var i = 0; i < ipSemester.length; i++) {
      total += ipSemester[i];
    }
    return total / ipSemester.length;
  }, // properti bernama ipKumulatif yang menyimpan function menghitung ipk
};

console.log("IPK Kumulatif:", namaObject.ipKumulatif()); // memanggil properti ipKumulatif
