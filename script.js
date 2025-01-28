//belajar DOM selection -> seri DOM Javascript

//klasisifikasi node
//node -> bisa element atau text, cuman satu
//html collection -> kumpulan node yang hanya element html saja
//node list -> kumpulan node baik element maupun yang lain

//DOM Tree -> adalah hubungan antara elemen satu dengan yang lain yang di representasikan dalam bentuk cabang pohon
//istilah-istilahnya
// root -> adalah akar atau induk paling awal dalam dom tree, yaitu document
// parent -> adalah sebuah node yang berada 1 tingkat lebih tinggi
// child -> adalah node yang berada 1 tingkat lebih rendah

//ada 4 cara untuk menyeleksi/memilih element dari html ke javascript yaitu:

//1. document.getElementById(" ") -> mengambil elemen dengan menggunakan id pada elemen tersebut
const p4 = document.getElementById("p4"); //mengambil element p (paragraf 4) dari id p4
p4.style.color = "red"; //contoh pemakaiannya -> menambahkan style css color red pada element

//2. document.getElementsByTagName(" ") -> mengambil elemen dengan menggunakan nama tag pada elemen tersebut
const p = document.getElementsByTagName("p"); // mengambil elemen dalam bentuk html collection (kumpulan node yang merupakan element)
p[2].style.color = "green"; //menambahkan style color green pada element p indeks ke 2
//untuk mengubah semua element p secara bersamaan bisa menggunakan loop
for (var i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "cyan"; // mengubah background semua element p dengan warna cyan
}

//3. document.getElementsByClassName(" ") -> mengambil element dengan menggunakan nama class pada elemen tersebut
const p1 = document.getElementsByClassName("p1"); // mengambil element p dari class p1
p1[0].style.color = "yellow"; // mengubah color pada element p dengan class p1 dari indeks 0

//4. document.querySelector(" ") -> mengambil elemen dari selector css pada elemen tersebut
const p5 = document.querySelector("#b p"); //menggunakan selector css
p5.innerHTML = "paragraf ini diubah dengan javascript";
const li2 = document.querySelector("#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

//5. document.querySelectorAll(" ") -> mengambil semua elemen(jamak) dari selector css
const pAll = document.querySelectorAll("p"); //mengambil semua element p dalam bentuk nodelist
p[1].style.color = "white"; //mengubah color di paragraf 2 menjadi white
//note : jika ingin mengubah semuanya maka bisa memakai loop
