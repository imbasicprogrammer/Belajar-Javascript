// latihan angkot yang kompleks dan menggunakan object
//dalam program ini ada beberapa hal yang akan dimuat yaitu
// 1. nama supir untuk setiap angkot
// 2. trayek/rute angkot
// 3. penumpang angkot
// 4. kas angkot

function Angkot(supir, trayek, penumpang, kas) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    if (this.penumpang.length === 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] === namaPenumpang) {
          console.log(`nama ${namaPenumpang} sudah naik`);
          return this.penumpang;
        } else if (this.penumpang[i] === undefined) {
          this.penumpang[i] = namaPenumpang;
          return penumpang;
        } else if (i === this.penumpang.length - 1) {
          this.penumpang.push(namaPenumpang);
          return this.penumpang;
        }
      }
    }
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("angkot sedang kosong");
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      } else if (i === this.penumpang.length - 1) {
        console.log(`nama penumpang ${namaPenumpang} tidak ada`);
        return false;
      }
    }
  };
}

var angkot1 = new Angkot("habib", ["padang", "painan"], [], 0);
console.log(angkot1);
