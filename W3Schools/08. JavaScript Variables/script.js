/* JavaScript Variables */
var x = 5;
var y = 6;
var z = x + y;

document.getElementById("demo1").innerHTML = "Nilai dari z adalah: " + z;

// JavaScript Variables as Algebra
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
document.getElementById("demo2").innerHTML = "The total is: " + total;

// JavaScript Numbers and Strings
const pi = 3.14;
let person = "Putu Sujane";
let answer = 'Yes, I am!';

document.getElementById("demo3").innerHTML = pi + "<br>" + person + "<br>" + answer;

// JavaScript var Keywords
let namaMobil = "Volvo";
document.getElementById("demo4").innerHTML = namaMobil;

// Declaring Many Variables in One Line Statements
let orang = "Putu Sujane", carName = "Tesla", price = 1000;
document.getElementById("demo5").innerHTML = carName;

// Declaring Many Variables Multiline
let dataA = "Putu",
dataB = "Sujane",
dataC = 2022;
document.getElementById("demo6").innerHTML = dataC;

// A variable Without a Value Returns the Value Undefined
let hello;
document.getElementById("demo7").innerHTML = "<code>" + hello + "</hello>";

// Re-declaring Variable Will Not Lose Value.
var var1 = 2;
var var1;
document.getElementById("demo8").innerHTML = var1;

// Adding JavaScript Numbers
let nilaiX = 5 + 2 + 3;
document.getElementById("demo9").innerHTML = "Hasil penjumlahan: 5 + 2 + 3 = " + nilaiX;

// Adding JavaScript Strings
let data_string = "Putu" + " " + "Sujane";
document.getElementById("demo10").innerHTML = data_string;

// Adding Strings and Numbers
let nilaiN = "5" + 2 + 3;       // hasil akan mengikuti tipe data string.
document.getElementById("demo11").innerHTML = "Hasil \"5\" + 2 + 3 = " + nilaiN;