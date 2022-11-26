// // try...catch
// try {
//     const filteredArray = [true, false].filter(true);
//     console.log(filteredArray);
// } catch (error) {
//     // console.log(error);

//     if (error instanceof SyntaxError) {
//         console.log("Error pada syntax.");
        
//     } else if (error instanceof TypeError) {
//         console.log("");
        
//     } else if (error instanceof ReferenceError) {
//         console.log("");
        
//     }
// } finally {
//     console.log("Ini selalu dijalankan.");
// }

// console.log("Lorem ipsum!");


// Cara Identidikasi Error
// -- menggunakan keyword instanceof = Menangkap error pada object
// =================================================================

// Membuat Error
// Mengapa membuat error?

// Mengenal keyword throw
// throw adalah sebuah statemen untuk mengirim sinyal exception.
// Dapat mencegah atau interupsi jalannya code.

// const errObj =  new Error("Kode ini error!");
// throw errObj;

// Contoh function berisi angka yang genap

const getEventNumber = (array) => {
    const filteredArray = array.filter((item) => {
        return item % 2 === 0;
    });
    return filteredArray;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(getEventNumber(myArray));

// Join code: 710184