// Mengetahui Jumlah Tag <a> (Anchor) Pada Dokumen HTML
document.getElementById("demo1").innerHTML = "Jumnlah anchor adalah: " + document.anchors.length;

// Mengetahui Anchor Pertama Pada Dokumen HTML
function myFunction1() {
    document.getElementById("demo2").innerHTML = document.anchors[0].innerHTML;
}