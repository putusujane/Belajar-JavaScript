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

// Tipe Data NaN
document.writeln(typeof NaN);