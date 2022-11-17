// JavaScript Comparisons

// == atau samadengan
let x = 5;  // Assignment nilai 5 kedalam variabel x
document.getElementById("demo1").innerHTML = (x == 8);  // Menghasilkan false

document.writeln("<br>x == 5 adalah: ", x == 5);

// === sama dengan nilai dan sama dengan tipe data
document.writeln("<br>x === 5 adalah: ", x === 5);
document.writeln("<br>x === \"5\" adalah: ", x === "5");

// != tidak samadengan
document.writeln("<br>x != 8 adalah: ", x != 8);

// !== tidak samadengan nilai dan tidak samadengan tipe data
document.writeln("<br>x !== 5 adalah: ", x !== 5);
document.writeln("<br>x !== \"5\" adalah: ", x !== "5");

// > lebih dari
document.writeln("<br>x > 8 adalah: ", x > 8);

// < kurang dari
document.writeln("<br>x < 8 adalah: ", x < 8);

// >= levih dari atau samadengan
document.writeln("<br>x >= 8 adalah: ", x >= 8);

// <= kurang dari atau samadengan
document.writeln("<br>x <= 8 adalah: ", x <= 8);

// Contoh penggunaan operator komparasi dengan statemen pengkondisian

let age = 27;
if (age < 18) document.writeln("<br>Terlalu muda untuk minum alkohol.");


// Operator Logika

    // and &&
let dataX = 6;
let dataY = 3;
let hasilAnd = (dataX < 10 && dataY > 1);
document.writeln("<br>", hasilAnd);

    // or ||
let hasilOr = (dataX == 5 || dataY == 5);
document.writeln("<br>", hasilOr);

    // ! not
let hasilNot = (!(dataX == dataY));
document.writeln("<br>", hasilNot);

// Operator Ternary
    // namaVariabel = (kondisi) ? nilai1 : nilai2
let umur = 27;
let voteable = (umur < 18) ? "Too young" : "Old enough";
document.writeln("<br>", voteable);

// Komparasi Nilai Berbeda Tipe
const dataArray = [
    2 < 12, 2 < "12", 2 < "John", 2 > "John", 2 == "John", "2" < "12", "2" > "12",
    "2" == "12"
];

document.writeln("<br>", dataArray.join(" - "));