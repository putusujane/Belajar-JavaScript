// Menulis String Menggunakan Tanda Petik Satu atau Petik Dua
let data_merk = "Pajero";
let data_warna = "Hitam";

document.getElementById("demo1").innerHTML =
data_merk + " " + data_warna + ".";

// Beberapa Contoh Penulisan String
let data_str1 = "It's alright";
let data_str2 = "He is called 'Johnny'";
let data_str3 = 'He is called "Johnny"';

document.getElementById("demo2").innerHTML = data_str1 + "<br>" + data_str2 + "<br>" +
data_str3;

// Menambah Tanda Backslash atau garis miring terbalik sebelum tanda quote (Petik)
let garing1 = 'It\'s alright';
let garing2 = "We are the so-called \"Vikings\" from the north.";

document.getElementById("demo3").innerHTML = garing1 + "<br>" + garing2;

// Mencari Panjang Suatu Data String
let dataString = "Putu Su";
let hasilPanjang = dataString.length;

document.getElementById("demo4").innerHTML = "Panjang string " + dataString +
", adalah: " + hasilPanjang;        // Dihitung mulai dari angka 1 (satu).

// Break Pada String
document.getElementById("demo5").innerHTML = "Hello \
World!";

// Kita Tidak Bisa Break Kode Menggunakan Backslash.
// document.getElementById("demo6").innerHTML = \ "Hello World!";

// Mencari Posisi Huruf Pertama Pada Kata String
let dataKata = "Lorem ipsum dolor sit amet.";

document.getElementById("demo7").innerHTML = dataKata.indexOf("dolor");

// Mencari Kata Yang Sesuai Dengan Nilai (Value)
function myFunction1() {
    let data_abc = "Lorem ipsum, tes, ipsum, tes, dolor, dolor, dolor.";

    document.getElementById("demo8").innerHTML = data_abc.match(/dolor/g);
}

// Mengganti Karakter atau Kata
function myFunction2() {
    let text1 = document.getElementById("demo9").innerHTML;
    document.getElementById("demo9").innerHTML = text1.replace("Microsoft", "w3Schools");
}

// Konversi Style String Menjadi Uppercase dan Lowercase
function myFunction3() {
    let text2 = document.getElementById("demo10").innerHTML;
    document.getElementById("demo10").innerHTML = text2.toUpperCase();

    let text3 = document.getElementById("demo11").innerHTML;
    document.getElementById("demo11").innerHTML = text3.toLowerCase();
}

// Split String Kedalam Array
let dataStr = "a, b, c, d, e, f, g";
const data_array = dataStr.split(",", 3);

document.getElementById("demo12").innerHTML = data_array[2];    // Jika Nilai index 3, undefined.


// Escape Character

/*
    \'
    \"
    \\

    \b      digunakan untuk Backspace
    \f      digunakan untuk Form Feed
    \n      digunakan untuk New Line
    \r      digunakan untuk Carriage Return
    \t      Horizontal Tabulator
    \v      Vertical Tabulator
*/

console.log("\\user");
console.log("\bUjicoba\b alakadar");
console.log("\fHello World!");
console.log("\nNewLine");
console.log("\rLorem\r Ipsum");
console.log("\tHello");
console.log("\vWorld!\vsdsd");