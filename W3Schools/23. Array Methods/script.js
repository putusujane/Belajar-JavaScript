/* JavaScript Array Methods */
/*
    1. push()       = Menambah akhir elemen
    2. pop()        = Menghapus akhir elemen
    3. join()       = Menggabungkan elemen kedalam string dan memisah
    4. concat()     = Menggabungkan dua atau lebih array
    5. splice()     = Menambah elemen ke posisi tertentu
    6. toString()   = Konversi array ke string
    7. unshift()    = Menambah elemen awal array
    8. shift()      = Menghapus elemen pertama array
    9. slice()      = Memilih elemen tertentu (sampai dengan) array
*/

// Menambah elemen di array menggunakan push()
const fruits = [
    "Banana",
    "Mango",
    "Apple",
    "Orange"
];

document.getElementById("demo1").innerHTML = fruits;


fruits.push("Rambutan");    // Menambah elemen.
document.getElementById("demo2").innerHTML = fruits;

// Menghapus elemen terakhir menggunakan pop()
const fruits1 = [
    "Banana",
    "Apple",
    "Orange",
    "Mango"
];
document.getElementById("demo3").innerHTML = fruits1;

fruits1.pop();      // Method untuk menghapus array terakhir.
document.getElementById("demo4").innerHTML = fruits1;

// join() adalah menggabungkan elemen array kedalam string.
const fruits2 = [
    "Banana",
    "Mango",
    "Watermelon",
    "Orange"
];
document.getElementById("demo5").innerHTML = fruits2.join(" * ");

// concat() adalah menggabungkan (concatenate) array.
const fruits3 = [
    "Banana",
    "Mango",
    "Orange",
    "Kiwi"
];

const buah = [
    "Pisang",
    "Mangga",
    "Jeruk",
    "Kiwi"
];

const gabung = fruits3.concat(buah);    // Menggabungkan dua array
document.getElementById("demo6").innerHTML = gabung;

const buahTambah = [
    "Semangka",
    "Sawo",
    "Durian",
    "Klengkeng"
];

const gabungTambah = gabung.concat(buahTambah); // Gabugn tiga array.
document.getElementById("demo7").innerHTML = gabungTambah;

    // Cara lain gabung tiga array.
const gabungTiga = fruits3.concat(buah, buahTambah);
console.log(gabungTiga);

// splice() Menambah elemen baru ke posisi tertentu pada array
const sample1 = [
    "Banana",
    "Orange",
    "Apple",
    "Mango"
];
document.getElementById("demo8").innerHTML = sample1;

    // 2 = index peletakan. 0 = elemen ingin dihapus.
sample1.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demo9").innerHTML = sample1;

// toString() = mengubah array ke string
const sample2 = [
    "Banana",
    "Orange",
    "Apple",
    "Mango"
];
console.log(typeof sample2);
console.log(Array.isArray(sample2));
console.log(sample2 instanceof Array);

document.getElementById("demo10").innerHTML = sample2.toString();
console.log(typeof sample2);
console.log(Array.isArray(sample2));

console.log(sample2 instanceof Array);

// unshift() untuk menambah elemen pada awal array.
const sample3 = [
    "Banana",
    "Orange",
    "Apple",
    "Mango"
];
document.getElementById("demo11").innerHTML = sample3;

sample3.unshift("Rambutan");
document.getElementById("demo12").innerHTML = sample3;

// shift() = Menghapus elemen awal array (kiri)
const sample4 = [
    "Banana",
    "Orange",
    "Apple",
    "Mango"
];
document.getElementById("demo13").innerHTML = sample4;

sample4.shift();
document.getElementById("demo14").innerHTML = sample4;

// slice() = memilih elemen tertentu pada array;
const sample5 = [
    "Banana",
    "Orange",
    "Apple",
    "Mango"
];
document.getElementById("demo15").innerHTML = sample5;

const sample5Sc = sample5.slice(0,2);
document.getElementById("demo16").innerHTML = sample5Sc;