//game tebak angka

//input tebakan user
let main = true;
while (main == true) {
  let user = parseInt(prompt("anda memiliki 3 kesempatan \npilih angka dari 1-10 : "));

  //code menentukan nilai angka dengan fungsi random
  let angka = Math.random();
  if (angka < 0.19) {
    angka = 1;
  } else if (angka > 0.19 && angka < 0.29) {
    angka = 2;
  } else if (angka > 0.29 && angka < 0.39) {
    angka = 3;
  } else if (angka > 0.39 && angka < 0.49) {
    angka = 4;
  } else if (angka > 0.49 && angka < 0.59) {
    angka = 5;
  } else if (angka > 0.59 && angka < 0.69) {
    angka = 6;
  } else if (angka > 0.69 && angka < 0.79) {
    angka = 7;
  } else if (angka > 0.79 && angka < 0.89) {
    angka = 8;
  } else if (angka > 0.89 && angka < 0.91) {
    angka = 9;
  } else {
    angka = 10;
  }

  //program untuk mengatur jumlah kesempatan
  let hasil = "";
  for (let i = 3; i >= 1; i--) {
    if (user == angka) {
      hasil = "tebakan anda benar yaitu : " + angka;
      alert(hasil);
      break;
    } else if (user < angka) {
      hasil = "nilai yang anda masukan lebih kecil";
      alert(hasil);
      user = parseInt(prompt("anda memiliki " + i + " kesempatan \npilih angka dari 1-10 : "));
    } else {
      hasil = "nilai yang anda masukan lebih besar";
      alert(hasil);
      user = parseInt(prompt("anda memiliki " + i + " kesempatan \npilih angka dari 1-10 : "));
    }
  }

  console.log(`tebakan user = ${user} \nangka yang benar = ${angka}`);
  main = confirm("mau main lagi ?");
}
