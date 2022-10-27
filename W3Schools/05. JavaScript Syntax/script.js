// JavaScript Statements (Pernyataan)
var x, y, z;        // Mendeklarasikan 3 variabel.
x = 5;              // Assign atau memberikan nilai 5 pada variabel x.
y = 6;              // Assign atau memberikan nilai 6 pada variabel y.
z = x + y;          // Assign atau menjumlahkan x dan y pada variabel z.

document.getElementById("demo1").innerHTML = "Nilai dari z adalah: " + z + ".";

// JavaScript Numbers (Angka)
document.getElementById("demo2").innerHTML = 10.50;

// JavaScript Strings (Teks)
document.getElementById("demo3").innerHTML = "Hello, World!";   // Menggunakan tanda petik dua.
document.getElementById("demo4").innerHTML = 'Halo, Dunia!';   // Menggunakan tanda petik satu.

// JavaScript Variables (Variabel)
let a;
a = 6;

document.getElementById("demo5").innerHTML = a;

// JavaScript Operators (Operator)
document.getElementById("demo6").innerHTML = (5 + 6) * 10;

// JavaScript Assignment
let dataX, dataY;
dataX = 5;
dataY = 6;

document.getElementById("demo7").innerHTML = dataX + dataY;

// JavaScript Expressions
    // Menggunakan constant
document.getElementById("demo8").innerHTML = 5 * 10;

    // Menggunakan String
document.getElementById("demo9").innerHTML = "Putu " + "Sujane";

    // Menggunakan Variabel
var dataZ;
dataZ = 5;
document.getElementById("demo10").innerHTML = dataX * 10;

// JavaScript Keywords
var nilaiX, nilaiY;
nilaiX = 5 + 6;
nilaiY = nilaiX * 10;

document.getElementById("demo11").innerHTML = nilaiY;

// JavaScript Comments
let nilaiZ;
nilaiZ = 5;     // Teks komentar ini tidak akan dieksekusi.
document.getElementById("demo12").innerHTML = nilaiZ;

// JavaScript Case Sensitive
let lastname, lastName;
lastname = "Sujane";
lastName = "Lorem Ipsum";

document.getElementById("demo13").innerHTML = lastName;

// Penulisan Semicolons (Titik Koma) / ;
let dataA, dataB, dataC, dataD, hasil;
dataA = 2; dataB = 4; dataC = 6; dataD = 8; hasil = dataA + dataB + dataC + dataD;

console.log(hasil);
document.writeln(hasil);

// JavaScript Code Block (Function)
function myFunction() {
    console.log("Lorem Ipsum");
    alert(95);
    document.writeln(true);
}