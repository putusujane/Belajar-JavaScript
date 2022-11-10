/* JavaScript Math (Matematika) */

// Math.PI
let dataPI = Math.PI;
document.getElementById("demo1").innerHTML = dataPI;
console.log(Math.PI);

// Membulatkan Number Menggunakan Method Math.round(x)
let dataRound = Math.round(4.5);
document.getElementById("demo2").innerHTML = dataRound + "<br>" + Math.round(4.4);
console.log(Math.round(4.5));

// Math.pow(x, y) method mengembalikan nilai x pangkat (**) dengan y .
document.writeln(Math.pow(5, 5));
console.log(Math.pow(5, 2));

// Math.sqrt(x) Mereturn Square root pada nilai x
document.writeln("<br>Pangkat dari 25 adalah: " + Math.sqrt(25));    // Akar
console.log(Math.sqrt(64));

// Math.abs(x) Mengembalikan nilai absolute (positif) pada x
document.writeln("<br>" + Math.abs(-4.7));
console.log(Math.abs(-4.7));

// Math.ceil(x) Mengembalikan Nilai x dibulatkan keatas
document.writeln("<br>" + Math.ceil(5.1));
console.log(Math.ceil(5.1));

// Math.floor(x) Mengembalikan Nilai x dibulatkan kebawah.
document.writeln("<br>" + Math.floor(4.7));
console.log(Math.floor(4.7));

// Math.sin(x) sin dari angle x (Memberikan Radian)
console.log("Math.sin(90 * Math.PI / 180) adalah: " + Math.sin(90 * Math.PI / 180));

// Math.cos(x) cosine dari x (diberikan di radian)
console.log("Nilai cosine dari 0 derajat adalah: "+ Math.cos(0 * Math.PI / 180));

// Math.max() Mengembalikan nilai tertinggi dari list argumen.
console.log("Value tertinggi adalah: "+ Math.max(0, 150, 30, 20, -8, -200, true));

// Math.min() Mengembalikan Nilai terendah dari list argument
console.log("Nilai terendah adalah: " + Math.min(0, -0, 1, 50, 100, 150, -150));

// Konversi Satuan Suhu Celcius ke Fahrenheit
function konversi(degree) {
    let x;
    if (degree == "celcius") {

        x = document.getElementById("celcius").value * 9 / 5 + 32;
        document.getElementById("fahrenheit").value = Math.round(x);

    } else {
        
        x = (document.getElementById("fahrenheit").value - 32) * 5 / 9;
        document.getElementById("celcius").value = Math.round(x);
    }
}