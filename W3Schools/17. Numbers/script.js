// JavaScript Numbers

// Penulisan Tipe Data Number
let dataNumbX = 3;
let dataNumbY = 3.14;

document.getElementById("demo1").innerHTML = dataNumbX + "<br>" + dataNumbY;

// Menulis extra large atau extra small numbers
let extLarge = 123e5;
let extSmall = 123e-5;

document.getElementById("demo2").innerHTML =
"Data Extra Large: " + extLarge + "<br>" + "Data Extra Small: " + extSmall;

// Numbers Hanya sampai 15 Digit
let dataInt1 = 9999_9999_9999_999;      // Number ini hanya 15 digit.
let dataInt2 = 9999_9999_9999_9999;     // Number ini 16 digit.

document.getElementById("demo3").innerHTML = "Nilai X = " + dataInt1 + "<br>" +
"Nilai Y = " + dataInt2;

// Floating Point Arithmetic is not Always 100% Accurate
let jumlahX = 0.2 + 0.1;

    // But it helps to multiply and divide:
let jumlahY = (0.2 * 10 + 0.1 * 10) / 10;

document.getElementById("demo4").innerHTML = "0.2 + 0.1 = " + jumlahX + "<br>" +
"(0.2*10 + 0.1*10) / 10 = " + jumlahY;

// Adding Two Numbers Result in a New Number
let val1 = 4;
let val2 = 4;
let result = val1 + val2;

document.getElementById("demo5").innerHTML = result;

// Concatenate Angka Dalam Bentuk String
let numStr1 = "10";
let numStr2 = "20";

let numStr3 = 11;
let numStr4 = "11";
let resNumStr1 = numStr3 + numStr4;
let resNumStr2 = numStr4 + numStr3;

document.getElementById("demo6").innerHTML = numStr1 + numStr2 + "<br>" + resNumStr1 +
"<br>" + resNumStr2;

// Kesalahan Statemenet 1
let nilaiX = 10;
let nilaiY = 20;

document.getElementById("demo7").innerHTML = "Hasil: " + nilaiX + nilaiY;   // Hasil: 1020

// Kesalahan Statement 2
let nilaiZ = "30";
let hasilZ = nilaiX + nilaiY + nilaiZ;

document.getElementById("demo8").innerHTML = "Hasil: " + hasilZ;

// JavaScript Mencoba Mengkonversi String Menjadi Number saat operator bagi, Kali, Kurang
let dataDivide1 = "100";
let dataDivide2 = "10";
let hasilDivide = dataDivide1 / dataDivide2;
let hasilKali = dataDivide1 * dataDivide2;
let hasilKurang = dataDivide1 - dataDivide2;

document.getElementById("demo9").innerHTML = "Hasil: " + hasilDivide +
"<br>" + "Hasil: " + hasilKali + "<br>" + "Hasil: " + hasilKurang;

// JavaScript Tidak Bisa Mengkonversi String ke Number Saat Menggunakan Operator Tambah
let dataString = "100";
let dataString1 = "10";
let hasilString = dataString + dataString1;

document.getElementById("demo10").innerHTML = hasilString;

// Angka Dibagi Dengan String Huruf Menghasilkan Nilai NaN
let dataBagi = 10;
let dataDivStr = "abc";
let hasilBagi = dataBagi / dataDivStr;

document.getElementById("demo11").innerHTML = hasilBagi;        // Hasil: NaN

// Number Dibagi Sengan Angka String Menghasilkan Nilai Number
let number1 = 100;
let numStrX = "10";

document.getElementById("demo12").innerHTML = number1 / numStrX;

// Mengetahui Suatu Nilai Bukan Number Menggunakan Function Global isNaN()
let isNumb = 100 / "abc";
document.getElementById("demo13").innerHTML = "Bukan number?: " + isNaN(isNumb);

// Menjumlahkan NaN Dengan Number
let dataNaN = NaN;
let dataAngka = 5;
document.writeln(dataNaN + dataAngka);

// Concatenate Angka String Dengan Number
document.writeln("5" + NaN);

// Tipe Data NaN adalah Number
document.writeln(typeof NaN);

// Hasil Infinity Jika Kita Menjumlahkan Angka Melebihi Batas Kemungkinan.
let angka1 = 2;
let txt = "";

while (angka1 != Infinity) {
    angka1 *= angka1;
    txt += angka1 + "<br>";
}

document.getElementById("demo14").innerHTML = txt;

// Dibagi dengan angkan nol menghasilkan nilai Infinity
let nilaiA = 10 / 0;        // Infinity
let nilaiB = -2 / 0;        // Infinity

document.getElementById("demo15").innerHTML = "10 / 0 = " + nilaiA + "<br>" +
"-2 / 0 = " + nilaiB;

// Nilai Infinity bertipe number
console.log(typeof Infinity);
console.log(typeof nilaiB);

// Menulis Numeric Constant Menghasilkan Nilai Hexadecimal
let valX = 0xFF;

document.getElementById("demo16").innerHTML = "0xFF = " + valX;

// Menggunakan Method toString() Menghasilkan Nilai Hex, Octal, dan Binary
    // Method ini bisa mengeluarkan numbers dari berbasis 2 ke 36.

let myNumber = 32;

document.getElementById("demo17").innerHTML = "Decimal 32 = " + "<br><br>" +
"Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
"Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
"Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
"Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
"Decimal (base 10): " + myNumber.toString(10) + "<br>" +
"Octal (base 8): " + myNumber.toString(8) + "<br>" +
"Binary (base 2): " + myNumber.toString(2);

// Number Bisa Menjadi Objek
    // valA adalah number
let valA = 123;

    // valB adalah number objek
let valB = new Number(123);

document.getElementById("demo18").innerHTML = typeof valA + "<br>" + typeof valB;

// Number dan Number Objek Tidak Aman Untuk dikomparasi
let $data1 = 500;
let $data2 = new Number(500);

document.getElementById("demo19").innerHTML = ($data1 == $data2) + "<br>" + ($data1 === $data2);

// Objek dan Objek Tidak Aman Untuk Dikomparasi
let $nilaiX = new Number(123);

let $nilaiY = new Number(123);

document.getElementById("demo20").innerHTML = ($nilaiX == $nilaiY) + "<br>" + ($nilaiX === $nilaiY);