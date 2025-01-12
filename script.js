//latihan string

let namaDepan, namaBelakang, namaLengkap;

document.getElementById("button_merge").onclick = function () {
  //.onclick -> event ketika tombol di klik
  namaDepan = document.getElementById("nama_depan").value; //.value -> inputan dari html
  namaBelakang = document.getElementById("nama_belakang").value;
  namaLengkap = `${namaDepan} ${namaBelakang}`;
  console.log(namaLengkap);

  document.getElementById("nama_lengkap").textContent = namaLengkap; //menampilkan namaLengkap ke html dengan .textcontent
};
