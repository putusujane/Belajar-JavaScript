// JavaScript DOM (Document Object Model)

// Mengubah Konten Elemen P
document.getElementById("demo1").innerHTML = "Hello, World!";
document.getElementsByTagName("<p>").innerHTML = "Hello";

// Menampilkan Nama/Nilai terhubung pada Cookies di dokumen
function myFunction() {
    document.getElementById("demo3").innerHTML = "Cookies associated with this document: " + document.cookie;
}

let x = document.createElement("<p>");
x.innerHTML = "Test";