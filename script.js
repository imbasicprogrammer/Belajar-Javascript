//operasi Komparasi
// 1. Equality (==)
// 2. !=  -> inequality
// 3. === -> stric Equality
// 4. !== -> strin ineaquality
// 5. >   -> lebih besar dari
// 6. >=  -> lebih besar sama dengan
// 7. <   -> lebih kecil dari
// 8. <=  -> lebih kecil sama dengan

//1. >  -> besar dari
let dataBool = 10 > 7;
console.log(`10 > 7 = ${dataBool}\n`);

//2. >=  -> besar sama dari
console.log(`10 >= 10 ${10 >= 10}`);

//3. < kecil dari
console.log(`7 < 10 ${7 < 10}`);

//4. <= kecil sama dari
console.log(`7 <- 7 ${7 <= 7}`);

//5 == -> equality
console.log(`11 == 11 ${11 == 11}`);
console.log(`7 == "7" ${7 == "7"}`); // dengan == maka string juga termasuk

//6. != -> inequality
console.log(`12 != 13 ${12 != 13}`);
console.log(`3 != "3" ${3 != "3"}`); // sama dengan enquality

//7. ===  -> strict equality (string tidak termasuk)
console.log(`14 === 14 ${14 === 14}`);
console.log(`14 === "14" ${14 === "14"}`);
console.log(`"14" === "14" ${"14" === "14"}`);

//8. !== -> strict inequality
console.log(`15 !== 15 ${15 !== 15}`);
console.log(`15 !== "15" ${15 !== "15"}`);
console.log(`15 !== "15" ${"15" !== "15"}`);
