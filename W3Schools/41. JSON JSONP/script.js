// JSONP Sederhana
function myFunc(myObj) {
    document.querySelector("#demo1").innerHTML = `${myObj.name}, ${myObj.age}, ${myObj.city}<br> ${JSON.stringify(myObj)}`;
}

// membuat Tag Script Dinamis
// function clickButton() {
//     let s = document.createElement("script");
//     s.src = "https://www.w3schools.com/js/demo_jsonp.php";
//     document.body.appendChild(s);
// }

// function myFunc(myObj) {
//     document.getElementById("demo2").innerHTML = myObj.age;
// }

const obj = { table: "products", limit: 5 };
let s = document.createElement("script");
s.src = "https://www.w3schools.com/js/jsonp_demo_db.php?x=" + JSON.stringify(obj);
document.body.appendChild(s);

function myFunc(myObj) {
  let txt = "";
  for (let x in myObj) {
    txt += myObj[x].name + "<br><br>";
  }
  document.getElementById("demo3").innerHTML = txt;
}

let s = document.createElement("script");
s.src = "demo_jsonp2.php?callback=myDisplayFunction";
document.body.appendChild(s);

function myDisplayFunction(myObj) {
  document.getElementById("demo4").innerHTML = myObj.name;
}

// Callback function
let s = document.createElement("script");
s.src = "demo_jsonp2.php?callback=myDisplayFunction";
document.body.appendChild(s);

function myDisplayFunction(myObj) {
  document.getElementById("demo").innerHTML = myObj.name;
}

function nameX(params) {
  return params;
}

nameX(1);