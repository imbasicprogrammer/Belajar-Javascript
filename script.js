//1. juragan angkot memiliki sepuluh angkot dalam kondisi bagus, buatkan loop untuk menomori tiap angkot

/*
let angkot = 1;

while (angkot <= 10) {
  console.log(`angkot ${angkot} dalam kondisi baik`);
  angkot++;
}
*/

//2. angkot 7 - 10 sedang tak beroperasi menggunakan for
let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log(`Angkot no ${noAngkot} bisa beroperasi`);
  noAngkot++;
}

angkotBeroperasi++;

for (angkotBeroperasi; angkotBeroperasi <= jmlAngkot; angkotBeroperasi++) {
  console.log(`Angkot no ${angkotBeroperasi} tidak bisa beroperasi`);
}

console.log("program berakhir");
