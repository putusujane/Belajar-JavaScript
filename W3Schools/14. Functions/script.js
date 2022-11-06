// JavaScript Functions

// Function sederhana
function function1() {
    document.getElementById("demo1").innerHTML = "Hello, World!";
}

// Function Dengan Argumen
function function2(name, job) {
    document.getElementById("demo2").innerHTML = "Nama: " + name + ", pekerjaan: " + job + ".";
}

// Function Dengan Argumen 2
function function3(text) {
    document.getElementById("demo3").innerHTML =  text;
}

// Function Mereturn Value Hasil Kalkulasi
function function4(a, b) {
    return a * b;
}

let x = function4(6, 2);

document.getElementById("demo4").innerHTML = x;

// Function Mengubah Suhu Fahrenheit ke Celcius
function function5(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}

document.getElementById("demo5").innerHTML = function5(77);

// Jika Function Dipanggil Tanpa Tanda ()
document.getElementById("demo6").innerHTML = function5;