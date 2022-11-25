// JavaScript JSON Arrays
//===============================================================

// Array Literal
const arrLiteral = [
    "Ford", "BWM", "Fiat"
];

document.getElementById("demo1").innerHTML = arrLiteral.join(", ");

// Membuat Array Dari JSON
const arrJ = '["Ford", "BMW", "Fiat"]';
const convArrJ = JSON.parse(arrJ);

document.getElementById("demo2").innerHTML = convArrJ;

// Mengakses Array Berdasarkan Index
document.querySelector("#demo3").innerHTML = convArrJ[1];

// Mengakses Array Didalam Object
const myJSON = '{"name": "Putu", "age": 27, "cars": ["Tesla", "BMW", "Fiat"]}';
const myObj = JSON.parse(myJSON);

document.getElementById("demo4").innerHTML = myObj.cars[0];

// Looping Suatu Array Menggunakan for...in
let text1 = "";
for (let i in myObj.cars) {
    text1 += `${myObj.cars[i]}, `;
}

document.querySelector("#demo5").innerHTML = text1;

// Looping Suatu Array Menggunakan for
let text2 = "";
for (let i = 0; i < myObj.cars.length; i++) {
    text2 += `${myObj.cars[i]}, `;
}

document.getElementById("demo6").innerHTML = text2;

// Mengakses Array JSON Bersarang (Nested)
let x = "";
const myObj1 = {
    "name": "Putu",
    "age": 27,
    "cars": [
        {"name": "Ford", "models": ["Fiesta", "Focus", "Mustang"]},
        {"name": "BMW", "models": ["320", "X3", "X5"]},
        {"name": "Fiat", "models": ["500", "Panda"]}
    ]
};

for (let i in myObj1.cars) {
    x += `<h2>${myObj1.cars[i].name}</h2>`;

    for (let j in myObj1.cars[i].models) {
        x += `${myObj1.cars[i].models[j]}<br>`;
    }
}

document.querySelector("#demo7").innerHTML = x;

// Memodifikasi Nilai Array Dari Suatu Object
myObj1.cars[0].name = "Tesla";

let text3 = "";
for (let i in myObj1.cars) {
    text3 += `${myObj1.cars[i].name}<br>`;
}

document.getElementById("demo8").innerHTML = text3;

// Menghapus Item Array Dari Suatu Object
delete myObj1.cars[2]

let text4 = "";
for (let i in myObj1.cars) {
    text4 += `${myObj.cars[i]}<br>`;
}

document.writeln(`${text4}`);