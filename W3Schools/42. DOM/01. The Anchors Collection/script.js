// Mengetahui Jumlah Tag <a> (Anchor) Pada Dokumen HTML
document.getElementById("demo1a").innerHTML = "Jumnlah anchor adalah: " + document.anchors.length;

// Mengetahui Anchor Pertama Pada Dokumen HTML
function myFunction1() {
    document.getElementById("demo2a").innerHTML = document.anchors[0].innerHTML;
}

// THE LINKS COLLECTION
// Menampilkan Jumlah Link Pada Sebuah Dokumen
document.getElementById("demo1").innerHTML =
    `Jumlah link adalah: ${document.links.length}`;

//Menampilkan Atribut href Pada Link Pertama
document.querySelector("#demo2").innerHTML =
    `Atribut href link pertama adalah: ${document.links[0].href}`;

//THE FORMS COLLECTION
// Mencari Jumlah Form Pada Dokumen
document.getElementById("demo3").innerHTML =
    `Jumlah formulir adalah: ${document.forms.length}`;

//Mencari Nama Pada Form Pertama
document.querySelector("#demo4").innerHTML =
    `Nama pertama pada form: ${document.forms[0].name}`;

// THE IMAGES COLLECTION
// Mencari Banyak Gambar Didalam Dokumen
document.getElementById("demo5").innerHTML =
    `Jumlah gambar adalah: ${document.images.length}`;

// Menampilkan id gambar pertama
document.querySelector("#demo6").innerHTML =
    `id gambar pertama adalah: ${document.images[0].id}`;

// CSS MANIPULATION
// Mengubah Visibilitas Elemen HTML
function hideText() {
    document.getElementById("demo7").style.visibility = "hidden";
}

function showText() {
    document.querySelector("#demo7").style.visibility = "visible";
}

// Mengubah Warna Background Elemen HTML
function bgChange(bg) {
    document.body.style.backgroundColor = bg;
}