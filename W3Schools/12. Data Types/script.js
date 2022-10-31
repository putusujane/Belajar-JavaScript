// Deklarasi String
let data_A = "Besok hari jum'at";
let data_B = "Anak itu dipanggil 'Joni'";
let data_c = 'Nama panggilanku adalah "Putu"';

document.getElementById("demo1").innerHTML = data_A + "<br>" + data_B + "<br>" + data_c;

// Deklarasi Angka atau Bilangan
let data_D = 1;
let data_E = 10.00;
let data_F = 3.14;

document.getElementById("demo2").innerHTML = "Bilangan bulat = " + data_D + " dan " + data_E
+ "<br>" + "Bilangan desimal = " + data_F;

// Deklarasi Array
const dataArray = ["Putu", "Tesla", "BMW", 0, 3.14];

document.getElementById("demo3").innerHTML = "Nama: " + dataArray[0];

// Deklarasi Object
const person = {
    namaPertama : "Putu",
    namaBelakang : "Sujane",
    umur : 27,
    warnaRambut : "Hitam"
};

document.getElementById("demo4").innerHTML = person.namaPertama + " adalah " + person.umur +
" tahun.";

// Mencari Tipe Data Operator (typeof)
document.getElementById("demo5").innerHTML =
typeof "" + "<br>" +
typeof "Putu" + "<br>" +
typeof "Putu Sujane" + "<br>" +
typeof 0 + "<br>" +
typeof 314 + "<br>" +
typeof 3.14 + "<br>" +
typeof (3.14) + "<br>" +
typeof -1 + "<br>" +
typeof person.data + "<br>" +
typeof dataArray[3];

// Menambahkan Dua Number dan Sebuah String
let num_str = 2 + 2 + "Halo";

    // Statement dibawah ini menghasilkan nilai string (angka awal dijumlah)
document.getElementById("demo6").innerHTML = "2 + 2 + \"Halo\" adalah: " + num_str;

// Menambahkan String dan Dua Angka
let str_num = "Hello" + 2 + 2;

    // Statement dibawah ini menghasilkan nilai string (angka terakhir digabungkan)
document.getElementById("demo7").innerHTML = "\"Hello\" + 2 + 2 = " + str_num;

// Variabel Undefined
let no_data;

let data_array = [""];

let data_object = {};

document.getElementById("demo8").innerHTML =
no_data + "<br>" + typeof no_data + "<br>" + typeof(no_data) + "<br>" + typeof data_array
+ "<br>" + typeof data_object;


// Variabel Kosong
let str_empty = "";

document.getElementById("demo9").innerHTML = "Nilai: " + "<br>" + "Tipe data: " + typeof str_empty;