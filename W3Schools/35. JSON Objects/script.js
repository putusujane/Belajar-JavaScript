// JavaScript JSON Objects
// =======================================================================

// Mengakses Properti JSON Object Menggunakan .property
const myJSON = '{"name": "Putu", "age": 30, "car": null}';
let myObj = JSON.parse(myJSON);

document.getElementById("demo1").innerHTML = `Nama: ${myObj.name}`;

// Mengakses Properti JSON Object Menggunakan [property]
document.querySelector("#demo2").innerHTML = `Nama: ${myObj["name"]}`;

// Looping Properti JSON Object Menggunakan for...in
let txt1 = "";
for (const x in myObj) {
    txt1 += `${x}, `;
}

document.querySelector("#demo3").innerHTML = txt1;

// Looping Semua Nilai Properti JSON Object
let txt2 = "";
for (const x in myObj) {
    txt2 += `${myObj[x]}, `;
}

document.getElementById("demo4").innerHTML = txt2;

// Akses Nested JSON Objects
const Obj1 = {
    "name": "Putu",
    "age": 30,
    "cars": {
        "car1": "Tesla",
        "car2": "BMW",
        "car3": "Fiat"
    }
};

document.querySelector("#demo5").innerHTML = `Merk mobil: ${Obj1.cars.car1}`;

// Memodifikasi Nilai Menggunakan dot Atau Titik Notasi
Obj1.cars.car2 = "mercedes";

let txt3 = "";
for (let i in Obj1.cars) {
    txt3 += `${Obj1.cars[i]}<br>`;
}

document.getElementById("demo6").innerHTML = txt3;

// Memodifikasi Nilai Object Menggunakan Notasi Braket []
Obj1.cars["car3"] = "Mustang";

let txt4 = "";
for (let i in Obj1["cars"]) {
    txt4 += `${Obj1["cars"][i]}<br>`;
}

document.querySelector("#demo7").innerHTML = txt4;

// Menghapus Properti Object
delete Obj1.cars.car3;

let txt5 = "";
for (let i in Obj1.cars) {
    txt5 += `${Obj1.cars[i]}<br>`;
}

document.getElementById("demo8").innerHTML = txt5;