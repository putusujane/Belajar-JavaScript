// Cara Menggunakan JSON Parse
const person1 = '{"fname": "Putu", "age": 27, "city": "Tulang Bawang Barat"}';
const obj1 = JSON.parse(person1);

document.querySelector("#demo1").innerHTML = `${obj1.fname}, ${obj1.age}.`;

// Contoh Menggunakan JSON Parse Pada AJAX
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    document.getElementById("demo2").innerHTML = myObj.name;
}

xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();

// Menggunakan JSON.parse() Pada Suatu Array
const xmlhttp1 = new XMLHttpRequest();
xmlhttp1.onload = function() {
    const myArr = JSON.parse(this.responseText);
    document.querySelector("#demo3").innerHTML = myArr[0];
}

xmlhttp1.open("GET", "json_demo_array.txt", true);
xmlhttp1.send();

// Konversi String Menjadi Object Date
const person2 = '{"name": "Putu", "birth": "1995-05-03", "city": "Tulang Bawang Barat"}';
const obj2 = JSON.parse(person2);

obj2.birth = new Date(obj2.birth);
document.getElementById("demo4").innerHTML = `${obj2.name}, ${obj2.birth}.`;

// Parsing Date Menggunakan Reviver Function
const obj3 = JSON.parse(person2, function (key, value) {
    if (key == "birth") {
        return new Date(value);
    } else {
        return value;
    }
});

document.querySelector("#demo5").innerHTML = `${obj3.name}, ${obj3.birth}.`;

// Parsing Function (Konversi String Ke Function)
const person3 = '{"name": "Putu", "age": "function() {return 30;}", "city": "Tulang Bawang Barat"}';
const obj4 = JSON.parse(person3);
obj4.age = eval(`( ${obj4.age} )`);

document.getElementById("demo6").innerHTML = `${obj4.name}, ${obj4.age()}.`;