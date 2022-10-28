// JavaScript Statements
document.getElementById("demo1").innerHTML = "Hello, World!";

// JavaScript Statements
let x, y, z;        // Statement 1
x = 5;              // Statement 2
y = 6;              // Statement 3
z = x + y;          // Statement 4

document.getElementById("demo2").innerHTML = "Nilai dari <code>x + y</code> adalah: " + z + " .";

// JavaScript Statements are Separated by Semicolons
let a, b, c;
a = 7;
b = 9;
c = a + b;

document.getElementById("demo3").innerHTML = c;

// Multiple Statement on One Line is Allowed
let d, e, f; d = 3; e = 5; f = d * e;
document.getElementById("demo4").innerHTML = "Hasil: " + f;

// JavaScript Statements can be Grouped Together in Code Blocks
function fungsiKu() {
    document.getElementById("demo5").innerHTML = "Hello, World!";
    document.getElementById("demo6").innerHTML = "Selamat datang!";
}

// Break Code Line After Operator or Comma
document.getElementById("demo7").innerHTML =
"Lorem ipsum dolor sit amet.";