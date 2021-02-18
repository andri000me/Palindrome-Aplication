function palindrom() {
  var str = document.getElementById("frm1").value;
  console.log(str);
  var mesplit = str.split("");
  console.log(mesplit);
  var membalik = mesplit.reverse();
  console.log(membalik);
  var joinss = membalik.join("");
  var hasil;
  if (str == joinss) {
    hasil = "Saat Dibalik Katanya Sama (Palindrom)";
  } else {
    hasil = "Saat Dibalik Katanya Berbeda (Bukan Palindrom)";
  }
  document.getElementById("demo").innerHTML = hasil;
}
