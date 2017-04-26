function generate() {
  var url = $("#in").val();
  var link = "https://playname.github.io/rr/?l=";
  var tmp = new Array(url.length);

  for (var i = 0; i < url.length; i++) {
    var t = -(~url.charCodeAt(i));
    tmp[i] = String.fromCharCode(t);
  }
  tmp = tmp.join("");

  link = link + tmp;
  $("#out").text(link);
}
