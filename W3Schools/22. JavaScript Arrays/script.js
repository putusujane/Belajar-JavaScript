/* JavaScript Arrays */
console.log("Hello, World!");   // Testing.

// Array sederhana pada JavaScript
const cars = ["Telsa", "Saab", "Volvo", "BMW"];
document.getElementById("demo1").innerHTML = cars;      // Menampilkan array.

// Alternatif Membuat Array (Cara kedua)
const dataCars = [
    "Volvo",
    "Toyota",
    "Tesla",
    "BMW"
];

document.getElementById("demo2").innerHTML = dataCars;

// Mengakses Elemen Array
const cars2 = [
    "Tesla",
    "BMW",
    "Pajero",
    "Ayla"
];

document.getElementById("demo3").innerHTML = cars2[1];

// Mengubah Elemen Array
const cars3 = [
    "Tesla",
    "BMW",
    "Putu",
    "Honda"
];

document.getElementById("demo4").innerHTML = cars3;     // Sebelum diubah.

cars3[2] = "Pajero";
document.getElementById("demo5").innerHTML = cars3;     // Setelah diubah.

// Mengetahui panjang sutatu array
const cars4 = [
    "Tesla",
    "BMW",
    "Volvo"
];

document.getElementById("demo6").innerHTML = cars4.length;      // Menggunakan method length

// Looping array menggunakan for loop
const cars5 = [
    "Tesla",
    "BMW",
    "Volvo",
    "Hello"
];

let cars5Ln = cars5.length;

for (let i = 0; i < cars5Ln; i++) {        // Looping standar (Sederhana)
    cars5[i];
}
document.getElementById("demo7").innerHTML = cars5;


let txt = "<ul>";
for (let i = 0; i < cars5Ln; i++) {        // Looping dengan menambah unordered  list <ul>
    txt += "<li>" + cars5[i] + "</li>";
}
txt += "</ul>"
document.getElementById("demo8").innerHTML = txt;

// Menambah elemen pada suatu array
const fruits = [
    "Banana",
    "Orange",
    "Apple"
];
document.getElementById("demo9").innerHTML = fruits;

function myFunction1(tambah) {    // Function
    fruits[fruits.length] = tambah;    // menambah Lemon didalam array fruits
    document.getElementById("demo9").innerHTML = fruits;
}

// Menambah Undefined holes pada array
const fruits1 = [
    "Banana",
    "Orang",
    "Apple"
];
fruits1[7] = "Lemon";

let fLen = fruits1.length;
let txt1 = "";

for (i = 0; i < fLen; i++) {
    txt1 += fruits1[i] + "<br>";
}

document.getElementById("demo10").innerHTML = txt1;

// Cara Mengenali Atau Mengidentifikasi Suatu Array
const buah = [
    "Pisang",
    "Mangga",
    "Apel"
];

document.getElementById("demo11").innerHTML = buah instanceof Array; // cara 1
document.getElementById("demo12").innerHTML = Array.isArray(buah);      // Cara 2
console.log(typeof buah);