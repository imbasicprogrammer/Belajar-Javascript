//3. angkot 7 - 10 sedang tak beroperasi menggunakan if

let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log(`angkot no ${noAngkot} bisa beropasi`);
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot == 5) {
    console.log(`angkot no ${noAngkot} sedang lembur`);
  } else {
    console.log(`angkot no ${noAngkot} tidak bisa beroperasi`);
  }
}
