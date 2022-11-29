// Membuat Tabel HTML Berbasis Data JSON
const dbParam = JSON.stringify({table: "customers", limit: 20});

const xmlhttp1 = new XMLHttpRequest();
xmlhttp1.onload = function () {
    const myObj1 = JSON.parse(this.responseText);
    let text1 = "<table border=\"1\">";

    for (let x in myObj1) {
        text += `<tr><td> ${myObj1[x].name}</td</tr>`;
    }

    text1 += "</table>";

    document.querySelector("#demo1").innerHTML = text1;
}

xmlhttp1.open("POST", "json_demo_html_table.php");
xmlhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp1.send("x=" + dbParam);

// Membuat Tabel HTML Dinamic
function change_myselect(sel) {
    const dbParam = JSON.stringify({table:sel,limit:20});
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      myObj = JSON.parse(this.responseText);
      text = "<table border='1'>"
      for (x in myObj) {
        text += "<tr><td>" + myObj[x].name + "</td></tr>";
      }
      text += "</table>"    
      document.getElementById("demo2").innerHTML = text;
    }
    xmlhttp.open("POST", "json_demo_html_table.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
}

// Membuat Dropdown List Berbasis Data JSON
const dbParam2 = JSON.stringify({table:"customers", limit:20});

const xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  let text = "<select>"
  for (let x in myObj) {
    text += "<option>" + myObj[x].name + "</option>";
  }

  text += "</select>"
  document.getElementById("demo3").innerHTML = text;
}

xmlhttp.open("POST", "json_demo_html_table.php");
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam2);