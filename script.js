//Belajar rekursif -> fungsi yang memanggil dirinya sendiri

//fungsi rekursif fibonaci
/*
function fibonacci(n) {
  if (n <= 1) {
    return n; // Basis: jika n = 0 atau n = 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Rekursi
}

// Contoh penggunaan
let n = parseInt(prompt("masukan nilai batas : ")); // Menampilkan 10 bilangan Fibonacci pertama
for (let i = 0; i < n; i++) {
  console.log(fibonacci(i));
}
*/

//fungsi rekursif faktorial
function faktorial(a) {
  if (a === 0) {
    return 1;
  }

  return faktorial(a - 1) * a;
}

let a = parseInt(prompt("masukan nilai : "));
for (i = 0; i <= a; i++) {
  console.log(`faktorial dari ${i} = ${faktorial(i)}`);
}
