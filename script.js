//A. membuat game suit sumatera barat
let main = true;
while (main == true) {
  //mengambil input user
  let user = prompt("silahkan pilih : gajah, semut, orang");

  //mengambil input computer dengan fungsi random
  let compt = Math.random();

  if (compt < 0.34) {
    compt = "gajah";
  } else if (compt > 0.34 && compt < 0.78) {
    compt = "orang";
  } else {
    compt = "semut";
  }

  hasil = "";
  if (user == compt) {
    hasil = "Seri";
  } else if (user == "gajah") {
    hasil = compt == "orang" ? "Anda menang" : "anda kalah"; //pakai ternary
  } else if (user == "orang") {
    hasil = compt == "semut" ? "anda menang" : "anda kalah";
  } else if (user == "semut") {
    hasil = compt == "gajah" ? "anda menang" : "anda kalah";
  } else {
    hasil = "pilihan anda salah";
  }

  alert(`kamu : ${user}\ncomputer : ${compt}\nhasil = ${hasil}`);
  console.log(`compt = ${compt} vs user = ${user} --> ${hasil}`);
  main = confirm("mau lanjut main ?");
}

alert("terima kasih sudah bermain");
console.log("game selesai");
