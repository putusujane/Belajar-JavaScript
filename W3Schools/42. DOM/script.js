// JavaScript DOM (Document Object Model)

// Mengubah Konten Elemen P
document.getElementById("demo1").innerHTML = "Hello, World!";
// document.getElementsByTagName("<p>").innerHTML = "Hello";

// Menampilkan Nama/Nilai terhubung pada Cookies di dokumen
function myFunction() {
    document.getElementById("demo3").innerHTML = "Cookies associated with this document: " + document.cookie;
}

let x = document.createElement("<p>");
x.innerHTML = "Test";

// Menampilkan Nama Domain Server Saat Dokument Terbuka
function myFunction1() {
    document.getElementById("demo4").innerHTML = document.domain;
}

// Menampilkan Tanggal dan Waktu Dokumen Terakhir Kali Diubah
document.getElementById("demo5").innerHTML = document.lastModified;

// Menampilkan Judul Dokumen
document.getElementById("demo6").innerHTML = "The title of this document is:" + document.title;
console.log(`Judul dokumen: ${document.title}`);

// Menampilkan URL Lengkap Pada Dokumen
document.getElementById("demo7").innerHTML = document.URL;
document.writeln("Hello, dunia!");

// Mengganti Konten Pada Dokumen
function myFunction2() {
    document.open("text/html", "replace");
    document.write("<h2>Belajar JavaScript DOM menyenangkan!</h2>");

    document.close();
}

// Membuka Jendela Baru dan Menambah Beberapa Konten
function openWindow() {
    let w = window.open();
    w.document.open();
    w.document.write("<h1>Hello, World!</h1>");

    w.document.close();
}

// Menampilkan Jumlah Elemen Dengan Spesifik Atribut/Properti name
function getElements() {
    let x = document.getElementsByName("x");
    document.getElementById("demo9").innerHTML = `Jumlah elemen: ${x.length}`;
}

// Menampilkan Jumlah Elemen Dengan Spesifik Berdasarkan Tag

function getElementsTag() {
    let x = document.getElementsByTagName("input");
    document.querySelector("#demo10").innerHTML = `Jumlah Tag input: ${x.length}`;
}