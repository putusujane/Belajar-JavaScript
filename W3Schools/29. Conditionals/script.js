// if Statement
if (new Date().getHours() < 18) {
    document.getElementById("demo1").innerHTML = "Good day!";
}
// ======================================================================

// else Statement
    // Statement
let hour = new Date().getHours();
let greeting;

    // Expression
if (hour < 18) {
    greeting = "Good day!";
} else {
    greeting = "Good evening!";
}

    // Declaration
document.getElementById("demo2").innerHTML = "Ucapan: " + greeting;
// ======================================================================

// else if Statement
let jam = new Date().getHours();
let ucapan;

if (jam < 10) {
    ucapan = "Selemat pagi!";
} else if (jam < 18) {
    ucapan = "Selamat siang!";
} else {
    ucapan = "Selamat malam!";
}

document.querySelector("#demo3").innerHTML = "Ucapan: " + ucapan;

// Link Acak
let text;

if (Math.random() < 0.5) {
    text = "<a href=\"https://www.facebook.com/\">Facebook</a>";
} else {
    text = "<a href=\"https://www.w3schools.com/\">W3Schools</a>";
}

document.querySelector("#demo4").innerHTML = "Link random: " + text;

// switch Statement
let day;

switch (new Date().getDay()) {
    case 1:
        day = "Senin";
        break;
    case 2:
        day = "Selasa";
        break;
    case 3:
        day = "Rabu";
        break;
    case 4:
        day = "Kamis";
        break;
    case 5:
        day = "Jum'at";
        break;
    case 6:
        day = "Sabtu";
        break;
    case 7:
        day = "Minggu";
}

document.querySelector("#demo5").innerHTML = "Today is: " + day;

console.log(new Date().getDay());