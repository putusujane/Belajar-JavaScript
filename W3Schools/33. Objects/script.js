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