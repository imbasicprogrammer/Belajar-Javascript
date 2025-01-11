//comment
console.log("external file");

//1. LET
//variabel di javascript dengan let
let nama = "monkey d luffy";

//menampilkan output
console.log(nama);

//mengubah isi variabel
nama = "monkey d dragon";
console.log(nama);

//kelakuan dari let
let namaDepan = "monkey";
{
  let namaDepan = "garp"; //hanya mengubah nilai yg ada dalam kurung kurawal
  console.log(namaDepan);
}
console.log(namaDepan);

//2. VAR
//kelakuan dari var
var namaB = "sanji";
{
  var namaB = "vinsmoke"; //ikut mengubah nilai diluar kurung kurawal
  console.log(namaB);
}
console.log(namaB); //mengambil data terbaru

//default tanpa keyword adalah var
makanan = "daging";
console.log(makanan); //ini di identifikasi sebagai  var

//3. CONST
const TTL = "16 agustus 2006"; // nilai variabel konstan dan tak dapat di ubah
console.log(TTL);
