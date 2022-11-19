/* JavaScript Error Handling */

// try...catch Statement
try {
    adddlert("Hello, World!");
} catch (error) {
    document.getElementById("demo1").innerHTML = error.message;
}

// try...catch Statement With a Confirm Box
let txt = "";

function myMessage() {
    try {
        adddlert("Welcome, guest!");
    } catch (err) {
        txt = "There was an error on this page.\n\n";
        txt += "Click OK to continue viewing this page, \n";
        txt += "or Cancel to return to the Google website.\n\n";

        if (!confirm(txt)) {
            document.location.href = "https://www.google.co.id/";
        }
    }
}

// onerror Event
onerror = errFunc;
let pesan = "";

function errFunc(msg, url, l) {
    pesan = "There was an error on this page.\n\n";
    pesan += `Error: ${msg}\n`;
    pesan += `URL: ${url}\n`;
    pesan += `Line: ${l}\n`;
    pesan += `Click OK to continue.\n\n`;

    alert(pesan);
    return true;
}

function message() {
    aalert("Welcome guest!");
}

// Dicari berdasarkan index.
console.log("Putu Sujane".search(/T/i));
// nilai ditentukan dari awal huruf dari kata.
// Tidak perduli uppercase atau lowercase

console.log("Putu Sujane".replace(/Sujane/, "Microsoft"));