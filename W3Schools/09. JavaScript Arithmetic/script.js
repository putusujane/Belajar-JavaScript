// Operator Tambah (+)
let x = 5;          // Assignment
let y = 2;
let tambah = x + y;

document.getElementById("demo1").innerHTML = "x + y = " + tambah;

// Operator Kurang (-)
let kurang = x - y;

document.getElementById("demo2").innerHTML = "x - y = " + kurang;

// Operator Kali (*)
let kali = x * y;
document.getElementById("demo3").innerHTML = "x * y = " + kali;

// Operator Bagi (/)
let bagi = x / y;
document.getElementById("demo4").innerHTML = "x / y = " + bagi;

// Operator Modulus atau Modulo (%)
let modulus = x % y;        // Adalah operator sisa pembagian.
document.getElementById("demo5").innerHTML = "x % y = " + modulus;

// Operator Increment (++)
var nilaiX = 5;
var incrX = ++nilaiX;       // Pre-incremented
document.getElementById("demo6").innerHTML = "nilaiX = " + nilaiX;
document.getElementById("demo7").innerHTML = "++nilaiX = " + incrX;

incrX = nilaiX++;
console.log(incrX);

// Operator decrement (--)
var nilaiX = 5;
var incrX = --nilaiX;       // Pre-decremented
document.getElementById("demo8").innerHTML = "nilaiX = " + nilaiX;
document.getElementById("demo9").innerHTML = "--nilaiX = " + incrX;

decr = nilaiX--;
console.log(decr);

// Operator Exponen (**) atau Pangkat
let exponen = x ** y;
document.getElementById("demo10").innerHTML = "x ** y = " + exponen;
// Atau
mathPow = Math.pow(x, 2);
document.getElementById("demo11").innerHTML = "<code>Math.pow(x, 2)</code> adalah = " + mathPow;


// Prioritas Operator
    // Urutan operasi = *, /, +, -,

let dataA = 100 + 50 * 3;
console.log(dataA);

let dataB = (100 + 50) * 3;
console.log(dataB);

let dataC = 100 + 10 - 20 * 2 / 10 ** 2 % 2;
console.log(dataC);

let dataD = (100 + 10) - (20 * 2) / (10 ** 2) % 2;
console.log(dataD);