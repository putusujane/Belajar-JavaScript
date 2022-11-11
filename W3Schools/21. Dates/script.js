// JavaScript Dates Objects

// Menggunakan new Date()
const dt = new Date();      // Deklarasi objek date tanpa argumen/parameter.
document.getElementById("demo1").innerHTML = dt;    // Menampilkan waktu dan tanggal terbaru.

console.log(dt);    // Menampilkan di console.

//  getFullYear() menampilkan Tahun
// const yr = new Date().getFullYear();
const yr = new Date();
document.getElementById("demo2").innerHTML = yr.getFullYear();

console.log(yr.getFullYear());

// getTime() menampilkan angka dalam miliseconds sejak tengah malam 1 January 1970.
const tm = new Date();
document.getElementById("demo3").innerHTML = tm.getTime();

console.log(tm.getTime());

// setFullYear() mengatur tanggal secara spesifik.
const getFullYr = new Date();
document.getElementById("demo4").innerHTML = getFullYr.setFullYear(2022);

// toUTCString() konversi tanggal hari ini menjadi string
const konver = new Date();
document.getElementById("demo5").innerHTML = konver.toUTCString();

// Menampilkan Hari Tetapi Diubah Menjadi Angka
const hariInt = new Date();
// document.getElementById("demo6").innerHTML = hariInt.getDay();
document.writeln("<br>" + "Hari ini dalam angka: " + hariInt.getDay());

// Menampilkan Hari sebagai nama menggunakan getDay() dan array
const hrArr =
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const tgl = new Date();
let day = hrArr[tgl.getDay()];
document.writeln("<br>" + "Hari ini, hari: " + day);

// menampilkan Jam live (Langsung)
function startTime() {
    const today = new Date();

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("waktu").innerHTML = h + ":" + m + ":" + s;
    
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + 1;    // Fungsinya menambah angka nol paling depan.
    }
    
    return i;
}



// ----------------------------------------------------------------------------
// Latihan
const tm1 = new Date();
let jam = tm1.getHours() + ":" + tm1.getMinutes() + ":" + tm1.getSeconds() + " WIB";

const arrayHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabut"];
let hari = arrayHari[tm1.getDay()];

let tanggal = tm1.getDate();

const arrBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus",
"September", "Oktober", "November", "Desember"];

let bulan = arrBulan[tm1.getMonth()];

let tahun = tm1.getFullYear();

document.writeln("<br>Jam: " + jam + "<br>Hari: " + hari + ", " + tanggal + " " + bulan + " " + tahun);