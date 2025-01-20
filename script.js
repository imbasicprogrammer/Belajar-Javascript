//Belajar perulangan dan pengkondisian bersarang

//1. perulangan menampilkan bintang 10 baris dengan masing masing 5 bintang
/*
let string = "";
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 5; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
*/

//2. Perulangan menampilkan bintang segitiga
/*
let star = "";
for (let i = 0; i < 10; i++) {
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
*/

//3. perulangan bintang segitiga terbalik
/*
let bintang = "";
for (let i = 10; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    bintang += "*";
  }
  bintang += "\n";
}
console.log(bintang); */

//4. segitiga terbalik berlawanan
/*
let bintang = "";
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    bintang += " ";
  }
  for (let k = 10; k > i; k--) {
    bintang += "*";
  }
  bintang += "\n";
}
console.log(bintang); */

//5 Membuat segitiga sama kaki

let bintang = "";
for (let i = 1; i <= 10; i++) {
  // Tambahkan spasi untuk perataan
  for (let j = 10; j > i; j--) {
    bintang += " ";
  }
  // Tambahkan bintang
  for (let k = 1; k <= 2 * i - 1; k++) {
    bintang += "*";
  }
  bintang += "\n";
}
console.log(bintang);
