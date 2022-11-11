/* JavaScript Random */

// Math.random() mereturn angka acak antara 0 (included) dan 1 (excluded)
let mtkRand = Math.random();    // Angka ditampilkan desimal 0 sampai 1 .

document.getElementById("demo1").innerHTML = "Hasil acak: " + mtkRand;
console.log(mtkRand);

// Math.floor(Math.random() * 10) Menampilkan angka 0 sampai 9 (termasuk keduanya)
let mtkRand09 = Math.floor(Math.random() * 10); // floor untuk membulatkan angka.

document.getElementById("demo2").innerHTML = "Acak 0 - 9: " + mtkRand09;
console.log(mtkRand09);

// Menampilkan angka 0 sampai 10 (termasuk keduanya)
let mktRand0_10 = Math.floor(Math.random() * 11);

document.getElementById("demo3").innerHTML = "Acak 0 s/d 10: " + mktRand0_10;
console.log(mktRand0_10);

// Menampilkan Angka 0 sampai 99 (termasuk keduanya)
let mtkRand0_99 = Math.floor(Math.random() * 100);

document.getElementById("demo4").innerHTML = "Acak 0 s/d 99 = " + mtkRand0_99;
console.log(mtkRand0_99);

// Menampilkan angka 0 sampai 100 (termasuk keduanya)
let mtkRand0_100 = Math.floor(Math.random() * 101);

document.getElementById("demo5").innerHTML = "Acak 0 s/d 100 = " + mtkRand0_100;
console.log(mtkRand0_100);

// Menampilkan Angka 1 sampai 10 (termasuk keduanya)
document.writeln("<br>"+ (Math.floor(Math.random() * 10) + 1));

console.log(Math.floor(Math.random() * 10) + 1);

// Menampilkan Angka 1 sampai 100
document.writeln("<br>" + (Math.floor(Math.random() * 100) + 1));
console.log(Math.floor(Math.random() * 100) + 1);

// Mereturn Angka Acak Antara x (included) dan y (excluded)
function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let nilaiXax = 10;
let nilaiMin = 5;

console.log(Math.floor(Math.random() * (nilaiXax - nilaiMin)) + nilaiMin);

// Menampilkan angka acak antara x dan y
function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

nilaiXax = 10;
nilaiMin = 1;
console.log(Math.floor(Math.random() * (nilaiXax - nilaiMin + 1)) + nilaiMin);