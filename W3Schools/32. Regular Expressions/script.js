// JavaScript Regular Expressions
// ================================

// Mencari Kata Didalam String
let dataStr = "Hello, World!";
let hasil1 = dataStr.search(/World!/i);

document.getElementById("demo1").innerHTML = hasil1;

// Mencari Kata Didalam String dan Menggantinya

// mencari tanpa case-sensitive (bebas)
function ganti() {
    let dataStr2 = document.getElementById("demo2").innerHTML;
    document.getElementById("demo2").innerHTML = dataStr2.replace(/Microsoft/i, "w3schools");
}


// Reguler Ekspresi Menggunakan g (harus case-sensitive)

let str1 = "Hello, World! Hello, World! Hello, World! Hello, World!";
document.writeln(str1.search(/World/g));

document.writeln(str1.replace(/World!/g, "Dunia!"));

document.writeln("<br>" + str1);

// Multiline Matcing
document.writeln("<br>" + str1.replace(/Hello/m, "Hay!"));