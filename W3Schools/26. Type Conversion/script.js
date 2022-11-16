// JavaScript Type Conversion
console.log("===== JavaScript Type Conversion =====\n")

/*
    1. Konversi String ke Number
    2. Konversi Number ke String
    3. Konversi Date to Number
    4. Konversi Number ke Date
    5. Konversi Boolean ke Number
    6. Konversi Number ke Boolean

    Konversi Type Data JavaScript

    Variabel pada JavaScript dapat dikonversikan ke variabel baru dan ke tipe data lain,
    dengan:

    - Menggunakan fungsi (function) JavaScript.
    - Secara otomatis oleh JavaScript itu sendiri.
*/

// Menampilkan Semua Tipe Data Variabel
    // Operator typeof mengembalian type data dari variabel, objek, function, atau ekspresi.

    // String
    let dataStr = "\"Putu\" atau 'Putu'";
    console.log(dataStr, ", bertipe: ", typeof dataStr);
    
    // Number
    let dataNumber1 = 3.14;
    console.log(dataNumber1, ", bertipe: ", typeof dataNumber1);

    let dataNaN = NaN;
    console.log(dataNaN, ", bertipe: ", typeof dataNaN);

    // Boolean
    let dataBool = false;
    console.log(dataBool, ", bertipe: ", typeof dataBool);

    // Object Array
    let dataObjArr = [1, "Putu", true, 3.14];
    console.log(dataObjArr, ", bertipe: ", typeof dataObjArr);

    // Object Object
    let dataObjObj = {fName: "Putu", lName: "Sujane", age: 27};
    console.log(dataObjObj, ", bertipe: ", typeof dataObjObj);

    // Object Date
    let dataObjDate = new Date();
    console.log(dataObjDate, ", bertipe:", typeof dataObjDate);

    // Function
    let dataFunc = function () {

    };
    console.log(dataFunc,", bertipe:", typeof dataFunc);

    // Variabel tidak ada nilai (value)
    let myCar;
    console.log(myCar, ", bertipe:", typeof myCar);

    // null
    let data_null = null;
    console.log(data_null, ", bertipe:", typeof data_null);

console.log("");

// Menampilkan Constructor Semua Tipe Data
    // Properti konstruktor mengembalikan function konstruktor pada variabel atau objek.

    console.log("Putu".constructor);
    console.log(3.14.constructor);
    console.log(false.constructor);
    console.log([1, 2, 3, 4].constructor);
    console.log({name: "Putu", age: 27}.constructor);
    console.log(new Date().constructor);
    console.log(function () {}.constructor);

console.log("");

// Konversi Number ke String Menggunakan String()
    // Menggunakan variabel
    let dataAngka = 123;
    console.log(String(dataAngka));

    // Langsung
    console.log(String(123));

    // Ekspresi
    console.log(typeof String(100 + 23));

console.log("");

// Konversi Number ke String Menggunakan toString()
    // Variabel
    let dataNum = 150;
    console.log(dataNum.toString());

    // Langsung
    console.log((150).toString());

    // Ekspresi
    console.log(typeof (100 + 50).toString());

console.log("");

// Mengetahui Jika Variabel Adalah Array
    const arrFruits = ["Banana", "Orange", "Apple"];
    console.log(isArray(arrFruits));

    function isArray(f) {
        return f.constructor.toString().indexOf("Array") > -1;
    }

    // Atau
    console.log(Array.isArray(arrFruits));

console.log("");

// Mengetahui Jika Variabel Adalah Date
    const date = new Date();
    console.log(isDate(date));

    function isDate(d) {
        return d.constructor.toString().indexOf("Date") > -1;
    }

    // Atau
    console.log("Apakah bertipe Date?:", isDate(date));