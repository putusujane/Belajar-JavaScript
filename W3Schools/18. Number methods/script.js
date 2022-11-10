/* JavaScript Number Methods */

// toString() Method
let myNumber = 32;
document.getElementById("demo1").innerHTML = "Decimal 32 = " + "<br><br>" +
"Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
"Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
"Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
"Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
"Decimal (base 10): " + myNumber.toString(10) + "<br>" +
"Octal (base 8): " + myNumber.toString(8) + "<br>" +
"Binary (base 2): " + myNumber.toString(2);

// Mengembalikan Number Sebagai Number
let nilaiX = 123;
document.getElementById("demo2").innerHTML =
nilaiX.valueOf() + "<br>" + (123).valueOf() + "<br>" + (100 + 23).valueOf();

// Mengembalikan Number Dengan Notasi Exponential
let exponen = 9.656;
document.getElementById("demo3").innerHTML =
exponen.toExponential() + "<br>" + exponen.toExponential(2) + "<br>" + exponen.toExponential(4) + "<br>" + exponen.toExponential(6);

// Membulatkan Number Menggunakan toFixed()
let roundedData = 9.656;
document.getElementById("demo4").innerHTML =
roundedData.toFixed(0) + "<br>" + roundedData.toFixed(2) + "<br>" + roundedData.toFixed(4) + 
"<br>" + roundedData.toFixed(6);

// Method Menghasilkan String, Dengan Number Ditulis Panjang Spesifik.
let presisi = 9.656;
document.getElementById("demo5").innerHTML =
presisi.toPrecision() + "<br>" + presisi.toPrecision(2) + "<br>" + presisi.toPrecision(4) + "<br>"
presisi.toPrecision(6);

// Konversi Variabel ke Number Menggunakan Method Global Number()
let dataBool = true;

document.getElementById("demo6").innerHTML =
Number(dataBool) + "<br>" +
Number(false) + "<br>" +
Number("10") + "<br>" +
Number(" 10") + "<br>" +
Number("10 ") + "<br>" + 
Number(" 10 ") + "<br>" +
Number("10.33") + "<br>" + 
Number("10,33") + "<br>" +
Number("10 33") + "<br>" + 
Number("John") + "<br>";

// Konversi Tanggal ke Number Menggunakan Method Global Number()
let dataTgl = new Date("2017-09-30");
document.getElementById("demo7").innerHTML = Number(dataTgl);

// Konversi String ke Number Menggunakan Function Global parseInt()
document.getElementById("demo8").innerHTML =
parseInt("-10") + "<br>" +
parseInt("-10.33") + "<br>" +
parseInt("10") + "<br>" +
parseInt("10.33") + "<br>" +
parseInt("10 6") + "<br>" +  
parseInt("10 years") + "<br>" +  
parseInt("years 10");

// Konversi String Menjadi Number Menggunakan Method Global parseFloat()
document.getElementById("demo9").innerHTML =
parseFloat("10") + "<br>" +
parseFloat("10.33") + "<br>" +
parseFloat("10 6") + "<br>" +
parseFloat("10 years") + "<br>" +
parseFloat("Years 10");

// Menampilkan Number Terbesar atau Terkecil di JavaScript
let dataLarge = Number.MAX_VALUE;       // Number Terbesar
let dataSmall = Number.MIN_VALUE;       // Number Terkecil
document.getElementById("demo10").innerHTML = dataLarge + "<br>" + dataSmall;


// POSITIVE_INFINITY Properti
let dataPoInf = Number.POSITIVE_INFINITY;   // Representasi
let dataPoInf1 = 1 / 0;     // Menghasilkan pada overflow.

document.getElementById("demo12").innerHTML =
"Positive Infinity = " + dataPoInf + "<br>" + "Overflow = " + dataPoInf1;

// NEGATIVE_INFINITY Property
let dataNegaInf = Number.NEGATIVE_INFINITY;     // Representasi
let dataNegaInf1 = -1 / 0;      // Menghasilkan pada Overflow.

document.getElementById("demo13").innerHTML =
"Negative Infinity = " + dataNegaInf + "<br>" + "Overflow = " + dataNegaInf1;

// NaN Represents "Not a Number"
console.log(Number.NaN);

// Arithmetic Performed on a String Will Result in NaN
    // Number dibagi dengan non-numeric string menghasilkan nilai NaN (Not A Number)
console.log(100 / "Apple");

// Using a Number Property on a Variable Will Return Undefined
let nilaiZ = 5;
console.log(nilaiZ.MAX_VALUE);
console.log(nilaiZ.MIN_VALUE);