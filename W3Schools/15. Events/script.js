// Event Onclick
function myFunction1() {
    document.getElementById("demo1").innerHTML = Date();
}

// Event Onclick
function myFunction2() {
    document.getElementById("demo2").innerHTML = Date();
}

// Menampilkan tanggal menggunakan script di elemen langsung
let x = document.getElementById("demo3").onmouseover;

if (x) {
    document.getElementById("demo3").innerHTML = "Hello, World!";
} else {

}

const dataArray = [1, "Tomat", true, 3.14, 'Putu'];
console.log(dataArray[0]);

const dataObjek = {
    fname: "Putu",
    lName: "Sujane",
    age: 27,
    fullName: function() {
        fname + " " + this.lName
    }
}