//Belajar Popup Box javascript
//alert, prompt, confirm

//alert -> menampilkan pop up pesan
alert("halo, siapa namamu ?");

//prompt -> menampilkan pop up yang bisa di isi
// let nama = prompt("masukan nama : ");

//confirm -> menampilkan pop up dan menghasilkan nilai true atau false
// let verifikasi = confirm(`apakah nama mu ${nama} ?`);
let verifikasi = true;
while (verifikasi === true) {
  let nama = prompt("masukan nama : ");
  alert("halo " + nama);
  verifikasi = confirm(`coba lagi ?`);
}

/*
if (verifikasi == true) {
  alert(`yahallo~~ ${nama}`);
}
*/
