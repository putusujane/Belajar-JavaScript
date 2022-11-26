// Menggunakan JSON.stringify() , mengubah object menjadi string JSON
const obj1 = {
    name: "Putu",
    age: 27,
    city: "Tulang Bawang Barat"
};

const myJSON1 = JSON.stringify(obj1);
document.getElementById("demo1").innerHTML = myJSON1;

// Menggunakan JSON.stringify() pada Array
const arr1 = ["Putu", 27, "Tulang Bawang Barat"];

const myJSON2 = JSON.stringify(arr1);
document.querySelector("#demo2").innerHTML = myJSON2;

// Storing Data (Storing Data in Local Storage)
    // Storing Data
const myObj1 = {name: "Putu", age: 27, city: "Tulang Bawang Barat"};
const myJSON3 = JSON.stringify(myObj1);
localStorage.setItem("testJSON", myJSON3);

    // Retreiving Data
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);

document.getElementById("demo3").innerHTML = obj.name;

// Stringify Dates (mengubah object date menjadi string)
const obj2 = {
    name: "Putu",
    today: new Date(),
    age: 27
};

const myJSON4 = JSON.stringify(obj2);
document.querySelector("#demo4").innerHTML = myJSON4;

// Stringify Function
// Function akan terhapus dari objek, termasuk kedua key dan value.
const obj3 = {
    name: "Putu",
    age: 27,
    height: function () {return 169;}
};

const myJSON5 = JSON.stringify(obj3);
document.writeln(myJSON5);

// Stringify Function Menggunakan Method toString()
// Cara ini tidak akan menghapus function didalam object JSON.

const obj4 = {
    name: "Putu",
    age: 27,
    height: function () {return 169;}
};

obj4.height = obj4.height.toString();

const myJSON6 = JSON.stringify(obj4);

document.writeln(`<br>${myJSON6}`);