//belajar switch

menu = prompt("pilih menu : \n cth: daging, ayam, ikan, burger, pizza, mie instan");

switch (menu) {
  case "daging":
    console.log("daging sehat!!");
    alert("daging sehat");
    break;
  case "ayam":
    console.log("ayam sehat!!");
    alert("ayam sehat");
    break;
  case "ikan":
    console.log("ikan sehat!!");
    alert("ayam sehat");
    break;
  case "burger":
    console.log("burger tidak sehat");
    alert("burger tidak sehat");
    break;
  case "pizza":
    console.log("pizza tidak sehat!!");
    alert("pizza tidak sehat");
    break;
  case "mie instan":
    console.log("mie instan tidak sehat!!");
    alert("mie instan tidak sehat");
    break;
  default:
    alert("yang anda masukan salah!!");
}
