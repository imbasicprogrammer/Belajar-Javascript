//3. angkot 7 - 10 sedang tak beroperasi menggunakan if

let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log(`angkot no ${noAngkot} bisa beropasi`);
  } else {
    console.log(`angkot no ${noAngkot} tidak bisa beroperasi`);
  }
}
