// // Memanggil JSON Dari PHP File
// const xmlhttp = new XMLHttpRequest();

// xmlhttp.onload = function () {
//     const myObj1 = JSON.parse(this.responseText);
//     document.querySelector("#demo1").innerHTML = myObj1.squadName;
// }

// xmlhttp.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
// xmlhttp.send();

// // Memanggil Array JSON dari PHP
// const xmlhttp1 = new XMLHttpRequest();
// xmlhttp1.onload = function () {
//     const myObj2 = JSON.parse(this.responseText);
//     document.getElementById("demo2").innerHTML = myObj2[2];
// }

// xmlhttp1.open("GET", "demo_file_array.php");
// xmlhttp1.send();

// // Memanggil JSON Dari Database
// const dbParam = JSON.stringify({"limit": 10});

// const xmlhttp2 = new XMLHttpRequest();
// xmlhttp2.onload = function () {
//     document.querySelector("#demo3").innerHTML = this.responseText;
// }

// xmlhttp2.open("GET", "json_demo_db.php?x=" + dbParam);
// xmlhttp2.send();

// Looping Data JSON dari Database PHP Server
// const obj = { "limit":10 };
// const dbParam = JSON.stringify(obj);
// const xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function() {
//   myObj = JSON.parse(this.responseText);
//   let text = ""
//   for (let x in myObj) {
//     text += myObj[x].name + "<br>";
//   }
//   document.getElementById("demo").innerHTML = text;
// };
// xmlhttp.open("GET", "json_demo_db.php?x=" + dbParam);
// xmlhttp.send();

// Send JSON Using POST Method
// const dbParam = JSON.stringify({"limit":10});
// const xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function() {
//   myObj = JSON.parse(this.responseText);
//   let text = "";
//   for (let x in myObj) {
//     text += myObj[x].name + "<br>";
//   }
//   document.getElementById("demo").innerHTML = text;
// }
// xmlhttp.open("POST", "json_demo_db_post.php");
// xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xmlhttp.send("x=" + dbParam);

const superheroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,

    "members": [
        // komentar
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },

      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },

      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
}

console.log(superheroes);

for (let i in superheroes.squadName) {
    console.log(superheroes.squadName);
}