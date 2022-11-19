function myFunction(params) {
    console.log(`=============== JavaScript ${params} ===============`);
}
myFunction("Loops (Perulangan)");

// Cara lama mengakses elemen array.
const cars1 = ["BMW", "Tesla", "Volvo", "Ford", "Fiat"];
let text1 = "";

document.querySelector("#demo1").innerHTML =
cars1[0] + "<br>" +
cars1[1] + "<br>" +
cars1[2] + "<br>" +
cars1[3] + "<br>" +
cars1[4] + "<br>" +
cars1[5] + "<br>";  // undefined karena elemen tidak ada.

// for Loop (Looping an array)
for (let i = 0; i < cars1.length; i++) {
    text1 += `Index ke-<strong>${i}</strong> adalah: <strong>${cars1[i]}</strong><br>`;
    console.log(text1);
}

document.getElementById("demo2").innerHTML = text1;

// Me-looping suatu array
const cars2 = [
    "Tesla",
    "BMW",
    "Toyota",
    "Fiat"
];

let text2 = "";

for (let i = 0; i < cars2.length; i++) {
    text2 += `Index ke-<strong>${i}</strong> adalah: <strong>${cars2[i]}</strong>.<br>`;
}

document.getElementById("demo3").innerHTML = text2;

// Looping tag HTML heading (h1 sampai h6)
let text3 = "";

for (let i = 1; i <= 6; i++) {
    text3 += `<h${i}>Heading ${i}</h${i}>`;
}

document.getElementById("demo4").innerHTML = text3;

// While loop
let txt1 = "";
let i = 0;

while (i < 10) {
    txt1 += `The number is ${i}<br>`;
    i++;
}

document.querySelector("#demo5").innerHTML = txt1;

const mobil = ["Tesla", "Volvo", "BMW"];
let z = 0;
let teks = "<br>";

while (z < mobil.length) {
    teks += `Index ke-${z} adalah: ${mobil[z]}<br>`;
    z++;
}

document.writeln(teks);

// do while (akan melakukan loop sekali walaupun false.)
let teksX = "";
let j = 0;

do {
    teksX += `<br>The number is ${j}`;
    j++;

} while ( j < 10);

document.getElementById("demo6").innerHTML = teksX;

// Break a Loop
const data_array = [10, true, 3.14, Math.PI, "Putu", ["a", "b", "c"], {fname: "Putu", lname: "Sujane"}];

let teks1 = "<br>";
let k;

for (k = 0; k < data_array.length; k++) {
    if (k == 5) {teks1 += "Ditemukan!<br>";}
    teks1 += `<br>Data: ${data_array[k]}<br>tipe: ${typeof data_array[k]}<br>`;
}

document.getElementById("demo7").innerHTML = teks1;

// Break and Continue a Loop
let teks2 = "";

for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    teks2 += `The number is ${i}.<br>`;
}

document.querySelector("#demo8").innerHTML = teks2;

// for..in Loop
const person = {name: "Putu", age: 27, address: "Tulang Bawang"};
let teks3 = "";

for (let x in person) {
    teks3 += person[x] + " ";
}

document.getElementById("demo9").innerHTML = teks3;

// for Loop Decrement
let teks4 = "";

for (let i = 10; i > 0; i--) {
    teks4 += `Angka ke-${i}<br>`;

    if (i == 5) {
        for (i = 6; i <= 10; i++) {
            teks4 += `Angka ke-${i}<br>`;
        }
        break;
    }
}

document.getElementById("demo10").innerHTML = teks4;

// Menggambar kotak dan persegi panjang
for (let i = 0; i < 4; i++) {
    document.write("<br>*");            // menurun

    for (let j = 1; j < 9; j++) {
        document.write("*");
    }
}

document.writeln("<br><br>");

//  ------------------------------------------------------

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        document.write("* ");
    }

    document.write("<br>")
}