//Belajar String

let dataString = "ini adalah string";
console.log(dataString);

//1 Escaping String ( \' \" \n \t \\ \r \b \f")
let data1 = "kaizokuni 'ore no naru'";
console.log(data1);
let data2 = "kimi no namewa \"udin'"; //  escaping karakternya adalah \"
console.log(data2);
let data3 = "halo dunia, nama saya\t habib"; //escaping tab
console.log(data3);
let data4 = "halo dunia, nama saya \nhabib"; //escaping enter
console.log(data4);

//2 Literal String (template literal string)
let namaDepan = "Monkey";
let namaTengah = "D";
let namaBelakang = "Luffy";
let umur = 20;
console.log(namaDepan + " " + namaTengah + " " + namaBelakang + " " + umur);
//yg diatas tidak efisien karena mengubah umur menjadi string

//cara yang efisien dan efektif adalah sbb
let biodata = `${namaDepan} ${namaTengah} ${namaBelakang} berumur ${umur} tahun`;
console.log(biodata);
