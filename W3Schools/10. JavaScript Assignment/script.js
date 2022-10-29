// Operator = (Samadengan)

let x = 10;
document.getElementById("demo1").innerHTML = "Nilai variabel <code>x</code> adalah: " + x;

// Operator +=
let dataA = 10;
dataA += 5;     // Sama juga dataA = dataA + 5

document.getElementById("demo2").innerHTML = "dataA += 5 adalah: " + dataA;
dataA += 2;
console.info(dataA);

// Operator -=
let dataB = 10;
dataB -= 2;     // sama juga seperti dataB = dataB - 2

document.getElementById("demo3").innerHTML = dataB;

dataB -= 4;
console.info(dataB);

// Operator *=
let dataC = 8;
dataC *= 2;

document.getElementById("demo4").innerHTML = dataC;

dataC *= 1;
console.log(dataC);

// Operator /=
let dataD = 20;
dataD /= 10;

document.getElementById("demo5").innerHTML = dataD;

dataD /= 2;
console.log(dataD);

// Operator %=      (Sisa pembagian)
let dataE = 100;
dataE %= 7;

document.getElementById("demo6").innerHTML = dataE;

dataE %= 2;
console.log(dataE);

// Operator **=     (Exponen/pangkat)
let dataF = 5;
dataF **= 2;

console.log(dataF);

// Operator <<= (Left Shift)
let data1 = -100;
data1 <<= 5;

console.log(data1);

// Operator >>= (Right Shift)
let data2 = -100;
data2 >>= 5;

console.log(data2);

// Operator >>>= (Right Shift Unsigned)
let data3 = -100;
data3 >>>= 5;

console.log(data3);

// Operator &=      (and)
let data4 = 1;
data4 &= 2;
console.log(data4);     // Menghasilkan nilai 0, disebut false.

// Operator !=      (or)
let dataN = 10;
dataN != 5;
console.log(dataN);