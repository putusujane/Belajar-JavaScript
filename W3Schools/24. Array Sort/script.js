// sort() = mengurutkan array secara alphabet (Ascending)
const fruits1 = [
    "Banana",
    "Orange",
    "Apple",
    "Mango"
];
document.getElementById("demo1").innerHTML = fruits1;

fruits1.sort();
document.getElementById("demo2").innerHTML = fruits1;

// reverse() = mengurutkan array secara descending
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.writeln("<br>" + fruits2);

fruits2.sort();
fruits2.reverse();
document.writeln("<br>" + fruits2);

// Mengurutkan angka pada array secara ascending (Nilai kecil)
const points1 = [40, 100, 1, 5, 25, 10];
document.writeln("<br>" + points1);

points1.sort(function(a, b) {return a - b});
document.writeln("<br>" + points1);

// Mengurutkan angka pada array secara descending (Nilai Besar)
const points2 = [40, 100, 1, 5, 25, 10];
document.writeln("<br>" + points2);

points2.sort(function(a, b) {return a - b});
points2.reverse();
document.writeln("<br>" + points2);

// Sortir Number Secara Alphabet atau Numeric
const points3 = [40, 100, 1, 5, 25, 10];
document.querySelector("#demo3").innerHTML = points3;

function alphabet() {
    points3.sort();     // Nilai diambil dari digit pertana
    document.querySelector("#demo3").innerHTML = points3;
}

function numeric() {
    points3.sort(function (a, b) {return a -b});    // Pengurutan dari angka kecil
    document.querySelector("#demo3").innerHTML = points3
}

// Mengurutkan Angka Array Menjadi Random (Acak)
const points4 = [40, 100, 1, 5, 25, 10];
document.querySelector("#demo4").innerHTML = points4;

function randomArr() {
    points4.sort(function () {return 0.5 - Math.random()});
    document.querySelector("#demo4").innerHTML = points4;
}

// Mencari Angka Terkecil Pada Array
const points5 = [40, 100, 1, 5, 25, 10];
document.writeln("<br>" + points5);

points5.sort(function (a, b) {return a - b});
document.writeln("<br>" + points5[0]);

// Mencari Angka Terbesar Pada Array
const points6 = [40, 100, 1, 5, 25, 10];
document.writeln("<br>" + points6);

points6.sort(function (a, b) {return b - a});
document.writeln("<br>Angka terbesar adalah: " + points6[0]);

// Mencari Angka Terkecil Pada Array Menggunakan Math.min()
const points7 = [40, 100, 1, 5, 25, 10];

function arrMin(arr) {
    return Math.min.apply(null, arr);
}

document.writeln("<br>Angka terkecil adalah: ",arrMin(points7));

// Mencari Angka Tertinggi Didalam Array Menggunakan Math.max()
const points8= [40, 100, 1, 5, 25, 10];

function arrMax(arr) {
    return Math.max.apply(null, arr);
}

document.writeln("<br>Angka terbesar adalah: ", arrMax(points8));

// Menggunakan Buatan Sendiri Method MyArrayMin (Mencari nilai terkecil)
const points9 = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;

    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }

    return min;
}

document.writeln("<br>Angka terkecil adalah: ", myArrayMin(points9));

// Menggunakan Buatan Sendiri Method MyArrayMax (Mencari nilai terbesar)
const points10 = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;

    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }

    return max;
}

document.writeln("<br>Angka terbesar adalah: ", myArrayMax(points10));

// Mengurutkan Object Sesuai Numeric
const cars1 = [
    {type: "Volvo", year: 2016},
    {type: "Saab", year: 2001},
    {type: "BMW", year: 2010},
];

cars1.sort(function(a, b) {return a.year - b.year});

function displayCars() {
    document.writeln("<br><br>" +
    cars1[0].type + " " + cars1[0].year + "<br>" +
    cars1[1].type + " " + cars1[1].year + "<br>" +
    cars1[2].type + " " + cars1[2].year);
}

displayCars();

// Mengurutkan Object Sesuai String
const cars2 = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
  
displayCars2();
  
function myFunction() {
    cars2.sort(function(a, b){
      let x = a.type.toLowerCase();
      let y = b.type.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    displayCars2();
}
myFunction();
  
function displayCars2() {
    document.writeln("<br><br>" +
    cars2[0].type + " " + cars2[0].year + "<br>" +
    cars2[1].type + " " + cars2[1].year + "<br>" +
    cars2[2].type + " " + cars2[2].year);
}