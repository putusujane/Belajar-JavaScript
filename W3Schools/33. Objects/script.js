// JavaScript Objects
// -------------------------------------------------------------------------------

// Variabel Pada JavaScript
let name = "Putu Sujane";
let age = 27;

document.getElementById("demo1").innerHTML = `Nama: ${name}<br>Umur: ${age}`;

// Membuat Object Sederhana Satu Baris
let person1 = {fName: "Putu", lName: "Sujane", age: 27, eyeColor: "Black"};

document.getElementById("demo2").innerHTML = `Nama: ${person1.fName} ${person1.lName}`;

// Membuat Object Sederhana Lebih dari satu baris (Multi Lines)
let person2 = {
    fName: "Putu",
    lName: "Sujane",
    age: 27,
    eyeColor: "Black"
};

document.getElementById("demo3").innerHTML = `Nama saya ${person2.fName} ${person2.lName}, umur saya ${person2.age} tahun.`;

// Membuat Object Menggunakan Kata Kunci Atau Keyword New
const person3 = new Object();
person3.fName = "Putu";
person3.lName = "Sujane";
person3.age = 27;
person3.eyeColor = "Black";

document.getElementById("demo4").innerHTML = `${person3.fName} ${person3.lName} umurnya ${person3.age} tahun, warna mata ${person3.eyeColor}.`;

// Membuat Object Menggunakan Konstruktor

    // Constructor function for Person objects
function Orang1(first, last, age, eye) {
    this.fName = first;
    this.lName = last;
    this.age = age;
    this.eyeColor = eye;
}

    // Creating a Person object
const myProfile = new Orang1("Putu", "Sujane", 27, "Black");

    // Display name and age
document.getElementById("demo5").innerHTML = `${myProfile.fName} ${myProfile.lName}, ${myProfile.age} ${Orang1.fName}`;

// Membuat Object Built-in Pada JavaScript
let x1 = new Object();
let x2 = new String();
let x3 = new Number();
let x4 = new Boolean();
let x5 = new Array();
let x6 = new RegExp();
let x7 = new Function();
let x8 = new Date();

document.getElementById("demo6").innerHTML = `
x1 = ${typeof x1}<br>x2 = ${typeof x2}<br>x3 = ${typeof x3}<br>x4 = ${typeof x4}<br>x5 = ${typeof x5}<br>x6 = ${typeof x6}<br> x7 = ${typeof x7}<br>x8 = ${typeof x8}`;

// Cara Terbaik Membuat Variabel Pada JavaScript
let y1 = {};
let y2 = "";
let y3 = 0;
let y4 = false;
let y5 = [];
let y6 = /()/;
let y7 = function(){};

document.getElementById("demo7").innerHTML =
`y1 = ${typeof y1}<br>
y2 = ${typeof y2}<br>
y3 = ${typeof y3}<br>
y4 = ${typeof y4}<br>
y5 = ${typeof y5}<br>
y6 = ${typeof y6}<br>
y7 = ${typeof y7}<br>`;

// Function Pada JavaScript Adalah Bermutasi
    // Merubah nilai dari object
const personX = {
    fName: "Putu",
    lName: "Sujane",
    age: 27,
    eyeColor: "Black"
};

const x = personX;
x.age = 30;

document.getElementById("demo8").innerHTML = `${x.fName} ${x.lName} berumur ${x.age}`;