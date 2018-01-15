function generate() {
  var url = $("#in").val();
  var link = "https://playname.github.io/rr/?l=";

  link = link + url;
  $("#out").text(link);
}
