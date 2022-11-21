// JavaScript Regular Expressions
// ================================

// Mencari Kata Didalam String
let dataStr = "Hello, World!";
let hasil1 = dataStr.search(/World!/i);

document.getElementById("demo1").innerHTML = hasil1;

// Mencari Kata Didalam String dan Menggantinya

function ganti() {
    let dataStr2 = document.getElementById("demo2").innerHTML;
    document.getElementById("demo2").innerHTML = dataStr2.replace(/Microsoft/i, "W3Schools");
}