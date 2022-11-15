// Array.forEach() adalah untuk memanggil function sekali untuk beberapa elemen array

const numbers1 = [45, 4, 9, 16, 25];

let txt = "";
numbers1.forEach(myFunction1);
document.querySelector("#demo1").innerHTML = txt;

function myFunction1(value, index, array) {
    txt += "Nilai array = " + value + "<br>";
}

// Array.map() Membuat Array Baru Dengan Mengkalikan 2 Pada Tiap Elemen Array
const numbers2 = [45, 4, 9, 16, 25];
const numbers3 = numbers2.map(myFunction2);

document.querySelector("#demo2").innerHTML = numbers3;

function myFunction2(value, index, array) {
    return value * 2;
}

// Array.filter() Membuat Array Baru Dengan Semua Elemen Array Yang Lebih Tinggi Dari Kriteria
const numbers4 = [45, 4, 9, 16, 25];
const numbersUp18 = numbers4.filter(myFunction3);

document.querySelector("#demo3").innerHTML = numbersUp18;

function myFunction3(value, index, array) {
    return value > 18;
}

// Array.reduce() dan Array.reduceRight() Menjumlahkan semua isi elemen array
const numbers5 = [45, 4, 9, 16, 25];
const sumNumbers5 = numbers5.reduce(myFunction4);

const numreduceRight = numbers5.reduceRight(myFunction5);

document.querySelector("#demo4").innerHTML ="Total = " + sumNumbers5 + "<br>Total = " + numreduceRight;

function myFunction4(total, value, index, array) {
    return total + value;
}

function myFunction5(total, value, index, array) {
    return total + value;
}

// Array.every() Memeriksa elemen array apakah melebihi Nilai Yang Ditentukan
const numbers6 = [45, 4, 9, 16, 25];
let over18 = numbers6.every(myFunction6);

document.writeln("<br>Nilai semua elemen array diatas 18 = " + over18);

function myFunction6(value, index, array) {
    console.log("Lebih dari 3 = ", value < 46);
    return value > 18;
}

// Array.some() Memeriksa beberapa elemen array melebihi nilai yang ditentukan.
const numbers7 = [45, 4, 9, 16, 25];
let someOver18 = numbers7.some(myFunction7);

document.writeln("<br>Beberapa elemen array diatas 18 = " + someOver18);

function myFunction7(value, index, array) {
    console.log("Beberapa lebih dari 18 = ", value > 18);
    return value > 18;
}

// Array.indexOf() Mencari Posisi Elemen Array Pertama
const fruits1 = ["Apple", "Orange", "Apple", "Mango"];
let index1 = fruits1.indexOf("Mango");
let position1 = fruits1.indexOf("Mango") + 1;

document.writeln("<br>Posisi Apel ke-", position1, " dan index ke-", index1);

// Array.lastIndexOf() Mencari posisi elemen array terakhir
const fruits2 = ["Apple", "Orange", "Apple", "Mango"];
let position2 = fruits1.lastIndexOf("Apple") + 1;

document.writeln("<br>Posisi Apel ke-", position2);

// Array.find() Mencari Angka Pertama Yang Diatas 15
const numbers8 = [4, 9, 16, 25, 29];
let first1 = numbers8.find(myFunction8);

document.writeln("<br>Angka pertama diatas 15 adalah ", first1);

function myFunction8(value, index, array) {
    return value > 15;
}

// Array.findIndex() Mencari Index Angka Pertama Yang Lebih Dari 15
const numbers9 = [4, 9, 16, 25, 29];
let first2 = numbers9.findIndex(myFunction8);

document.writeln("<br>Index angka pertama diatas 15 adalah ", first2);

function myFunction8(value, index, array) {
    return value > 15;
}