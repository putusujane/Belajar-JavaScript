// Single Line Comments

    // Change heading:
document.getElementById("demo1").innerHTML = "Hello, World!";

    // Change paragraph:
document.getElementById("demo2").innerHTML = "Lorem ipsum";


// Single Line Comments at the End of a Line

let x = 5;      // Mendeklarasikan x, memberikan value 5.
let y = x + 2;      // Mendeklarasikan y, memberikan value x + 2.

    // Menampilkan variabel y ke id "demo3"
document.getElementById("demo3").innerHTML = y;


// Multiple Lines Comments

/*
    Dibawah ini adalah menambah teks pada id "demo4"
    dan mengubah warna teks didalam box id "demo5" menjadi kuning,
    dan menjadi rata tengah vertikal.
*/
document.getElementById("demo4").innerHTML = "Ini adalah paragraph."

document.getElementById("demo5").style.color = "yellow";
document.getElementById("demo5").style.display = "flex";
document.getElementById("demo5").style.alignItems = "center";
document.getElementById("demo5").style.justifyContent = "center";
document.getElementById("demo5").style.textAlign = "center"; // hapus kode ini jika pakai dibawah

// document.getElementById("demo5").style.minWidth = "200px";
document.getElementById("demo5").style.height = "200px";