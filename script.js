//belajar Membuat Object
//ada 4 cara membuat object :

//1. object literal -> penulisan object paling umum
var namaObject = {
  nama: "hatake kakashi",
  usia: 24,
  kampus: "universitas andalas",
};
console.log(namaObject); //pemanggilan object literal

//2. function declaration -> penulisan object dengan memanfaatkan deklarasi function
function objectMhs(nama, usia, kampus) {
  var mhs = {};
  mhs.nama = nama;
  mhs.usia = usia;
  mhs.kampus = kampus;
  return mhs;
}
var mhs1 = objectMhs("danzo", 45, "konoha"); //pemanggilan dengan function declaration

//3. constructor -> hampir mirip dengan function declaration, bedanya kita tak perlu mendeklarasikan var untuk object
// karena sudah langsung dibuatkan oleh javascript dengan nama var this

function Mahasiswa(nama, usia, kampus) {
  //nama function pada construct biasanya sederhana dan diawali kapital -> Mahasiswa
  this.nama = nama;
  this.usia = usia;
  this.kampus = kampus;
}

var mhs3 = new mhs2("sarutobi", 56, "brawijaya"); //pemanggilan object dengan constructor
//jika memakai constructor maka tiap memanggil kita harus memakai keyword new
