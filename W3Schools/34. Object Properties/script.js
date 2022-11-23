// Belajar JavaScript Object Properties
// =====================================================================

// Mengakses Properti Menggunakan .property
const person1 = {
    fName: "Putu",
    lName: "Sujane",
    age: 27,
    eyeColor: "Black"
};

document.getElementById("demo1").innerHTML = `${person1.fName} is ${person1.age} years old.`;

// Mengakses Properti Menggunakan [property]
const person2 = {
    fName: "Putu",
    lName: "Sujane",
    age: 27,
    eyeColor: "Black",
};

document.getElementById("demo2").innerHTML = `${person2["fName"]} is ${person2["age"]} years old.`;

// Mengakses Properti Menggunakan for...in (Looping nilai objek)
const person3 = {
    fName: "Tame",
    lName: "Jaya",
    age: 23,
    eyeColor: "Black"
};

    // Looping
let txt1 = "";
for (let x in person3) {
    txt1 += `${person3[x]} `;
}

document.getElementById("demo3").innerHTML = txt1;

// Menambah Properti Baru Pada Objek yang Sudah Ada
const person4 = {
    fName: "Rangga",
    lName: "Ditya",
    age: 5,
    eyeColor: "Black"
};

    // Assignment penambahan properti
person4.nationality = "Indonesia";
person4["religi"] = "Indonesia";

document.querySelector("#demo4").innerHTML = `${person4.fName} is ${person4.nationality}.`;

// Menghapus Properti Object
const person5 = {
    name: "Candra",
    age: 40,
    eyeColor: "Black",
    nationality: "Indonesia"
};

    // Deleting property
delete person5.nationality;
delete person5["eyeColor"];

document.querySelector("#demo5").innerHTML = `${person5.name} is ${person5.nationality}.`

// Nested Objects
//  Object nested atau ada object didalam object
const objA = {
    name: "Putu",
    age: 27,
    address: "Unit 6",
    cars: {
        car1: "Tesla",
        car2: "BMW",
        car3: "Ford"
    }
};

document.writeln(`<br>Name: ${objA.name}<br>Mobil: ${objA.cars.car1}`);

// Nested Arrays and Objects
// Array dan Objek Bersarang

const myObj = {
    name: "Supini",
    age: 30,
    cars: [
        {name: "Tesla", models: ["X", "S", "Y"]},
        {name: "BMW", models: ["320", "X3", "X5"]},
        {name: "Fiat", models: ["500", "Panda"]}
    ]
};      // Nilai didalam objek bisa array, nilai didalam array bisa objek.

    // Akses Array didalam Array Menggunakan for...in loop untuk setiap array
let txt2 = "";
for (let i in myObj.cars) {
    txt2 += `<h1>${myObj.cars[i].name}</h1>`;

    for (let j in myObj.cars[i].models) {
        txt2 += `${myObj.cars[i].models[j]}<br>`;
    }
}

document.writeln(txt2);