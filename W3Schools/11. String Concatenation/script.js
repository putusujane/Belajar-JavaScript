// Menambahkan String Menggunakan Operator +
let dataStr1 = "Hari ini";
let dataStr2 = "cerah.";

document.getElementById("demo1").innerHTML = dataStr1 + " " + dataStr2;

// Concatenate Dua String Menggunakan Operator +=
let str1 = "Halo, ";
str1 += "selamat datang!";

document.getElementById("demo2").innerHTML = str1;

// Menambahkan String dan Number
let dataInt = 5 + 5;
let dataStr = "5" + 5;
let dataS = "Halo" + 5;

document.getElementById("demo3").innerHTML = dataInt + "<br>" + dataStr + "<br>" + dataS;
let z = typeof(dataInt);
console.log(z);