//Belajar tipe data Boolean

let dataBool = true; //true = 1
console.log(dataBool);

dataBool = false; //false = 0
console.log(dataBool);

//boolean bisa juga di definisikan dengan ->  <,>,==
let data_bool = 3 < 9;
console.log(`3 < 9 = ${data_bool}`);

data_bool = 3 > 9;
console.log(`3 > 9 = ${data_bool}`);

nama = "luffy" == "sabo"; //persamaan dg string
console.log(`luffy == sabo -> ${nama}`);

//nilai boolean khusus false bisa juga
console.log("nilai false akan true atau sama dengan :");
data_bool2 = false == 0;
console.log(`false == 0 -> ${data_bool2}`);

data_bool2 = false == 0n;
console.log(`false == 0n -> ${data_bool2}`);

data_bool2 = false == " ";
console.log(`false == " " -> ${data_bool2}`);
