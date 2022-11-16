// Menampilkan nilai Boolean(10 > 9)
document.getElementById("demo1").innerHTML ="<code>Boolean(10 > 9)</code> adalah: " + Boolean(10 > 9);

// Menampilkan Nilai dari 10 > 9
document.getElementById("demo2").innerHTML ="Hasil dari 10 > 9 adalah: " + (10 > 9);

// Apapun Dengan Nilai real atau asli menghasilkan nilai true
document.querySelector("#demo3").innerHTML =
"100 = " + Boolean(100) + "<br>" +
"3.14 = " + Boolean(3.14) + "<br>" +
"-15 = " + Boolean(-15) + "<br>" +
"\"Hello\" = " + Boolean("Hello") + "<br>" +
"false = " + Boolean("false") + "<br>" +
Boolean(1 + 7 + 3.14);

// Boolean dari 0 adalah false
let bool0 = 0;
document.writeln("<br>Boolean(0) adalah ", Boolean(bool0));

// Boolean dari -0 adalah false
let boolMin0 = -0;
document.writeln("<br>Boolen(-0) adalah: ", Boolean(-0));

// String Kosong Bernilai false
let strBlank = "";
document.writeln("<br>String kosong = ", Boolean(strBlank));

// Boolean dari undefined adalah false
let varUndef;
document.writeln("<br>undefined = ", Boolean(varUndef));

// Boolean dari null adalah false
let varNull = null;
document.writeln("<br>null = ", Boolean(null));

// Boolean dari false adalah false
let data_fs = false;
document.writeln("<br>false = ", Boolean(false));

// Boolean dari NaN (Not a Number) adalah false
let data_NaN = NaN;
document.writeln("<br>NaN = ", Boolean(NaN));

// Komparasi variabel dengan objek
let x = false;                  // Tipe data boolean
let y = new Boolean(false);     // Tipe data objek

z = (x == y);       // Nilai true
z3 = (x === y);     // Nilai false

console.log(z, "\n", z3);

// Komparasi dua buah objek menghasilkan nilai false.
let a = new Boolean(true);
let b = new Boolean(true);

let c = (a == b);       // false
let d = (a === b);      // false

console.log(c, "\n", d);