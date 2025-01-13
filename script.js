//belajar operasi aritmatika
// */+-

//expression -> a = 1, a + 1
//statement -> a = 1 + 1

let angka1, angka2;

angka1 = 2; // expression
angka1 += 2; // +
console.log(`angka1 = ${angka1}`);

angka2 = angka1 + 4; // statement
angka2 = angka2 - 2; // -
console.log(`angka2 = ${angka2}`);

angka3 = angka1 * angka2;
console.log(`angka3 = ${angka1} * ${angka2} = ${angka3}`);

//increment ++
angka1++;
console.log(`angka1++ = ${angka1}`);
angka1++;
console.log(`angka1++ = ${angka1}`);

//decrement --
angka2--;
console.log(`angka2-- = ${angka2}`);
angka2--;
console.log(`angka2-- = ${angka2}`);

//modulo , sisa bagi %
angka4 = angka1 % angka2;
console.log(`angka1 = ${angka1} % ${angka2} = ${angka4}`);
