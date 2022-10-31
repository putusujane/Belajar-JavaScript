// Membuat Variabel Pada JavaScript
let var1 = "Fiat";

document.getElementById("demo1").innerHTML = var1;

// Membuat Object di JavaScript
const person = {
    fName: "Putu",
    lName: "Sujane",
    age: 27,
    long: 169.5
};

document.getElementById("demo2").innerHTML = "Nama pertama: " + person.fName;

// Membuat Object Person (Satu Baris)

const person2 = { fName: "Putu", lName: "Sujane", age: 27, long: 169.5 };

document.getElementById("demo3").innerHTML = person2.fName + " " + "ber-umur " + person2.age
+ " tahun.";

// Membuat Object Person (Banyak Baris)

const person3 = {
    fName: "Putu",
    lName: "Sujane",
    age: 27
};

document.getElementById("demo4").innerHTML = "Umur " + person3.fName + " adalah " + person3.age
+ " tahun.";

// Mengakses Properti Object Menggunakan .propery atau ["property"]
const person4 = {
    fName: "Putu",
    lName: "Sujane",
    age: 27,
    long: 169.5,
    telp: 822_8171_6296
};

document.getElementById("demo5").innerHTML =
"Nama lengkap: " + person4.fName + " " + person4.lName + "<br>" +
"Umur: " + person4["age"] + " tahun.";

// Mengakses Properti Function Sebagai Method
const person5 = {
    fName: "Putu",
    lName: "Sujane",
    age: 27,

    fullName: function() {
        return this.fName + " " + this.lName;
    }
};

document.getElementById("demo6").innerHTML = "Nama lengkap: " + person5.fullName();

// Jika kita mengakses method objek tanpa tanda () , akan mereturn mentahan function itu sendiri.
console.log(typeof person5);      // Object
console.log(typeof person5.fullName);       // Function 
console.log(typeof person5.fullName());       // String 