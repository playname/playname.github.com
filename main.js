/*function showHint(text, parent) { $("#"+parent).append("<div id='"+parent+"hint'>"+text+""); }
function hideHint(hintId) { $("#"+hintId).remove(); }*/

//Konami code
var k = true;
var stage = 0;
var pressed = false;
//Url
var background;
var vid;
var hasVid;

setTimeout(function() {window.onload = setup();}, 500);

function setup() {
  var args = location.search.split("&");

  for (var i = 0; i < args.length; i++) {
    var arg = args[i].split("=");

    switch (arg[0]) {
      case "?url":
        //changeBg(arg[1]);
        bgByLink(arg[1]);
      case "?img":
        changeBg("https://playname.github.io/assets/img/backgrounds/" + arg[1] + ".jpg");
      case "?v":
        $("#video").attr("src", "https://www.youtube.com/embed/" + arg[1]);
        vid = arg[1];
        hasVid = true;
    }
  }

  main();
}

function main() {
  requestAnimationFrame(main);
  update();
  if (k) konami();
}

function update() {
  //TODO: debug, settings, other update stuff
  $("#bgUrl").keydown(function(e) {if (e.which == 13) bgByUrl();});
  $(document).keydown(function(e) {if (e.which == 83 && !$("#bgUrl").is(":focus")) openSettings();});
}

function openSettings() {$("#settings").css({"position":"relative", "top":"1em", "left":"1em"});}
function closeSettings() {$("#settings").css({"position":"absolute", "top":"-100vh", "left":"-100vw"});}

var settings = {
  resetBg: function() {
    $("body").css("background-image", "");
  }
}

function generateUrl() {
  var url = "https://playname.github.io/";

  if (!background) {
    $("#siteUrl").val(url);
  } else {
    url += background;
    $("#siteUrl").val(url);
  }
  if (hasVid) {
    url += "&?v=" + vid;
    $("#siteUrl").val(url);
  }
}

function changeBgFile() {
  var file = $("#bg")[0].files[0];
  var reader = new FileReader();
  reader.onloadend = function(){
    $("body").css({"background-image":"url(" + reader.result + ")", "background-size":"cover"});
  }
  if(file){
    reader.readAsDataURL(file);
  }
}

function changeBg(img) {
  console.log("Hi");
  $("body").css({"background-image":"url(" + img + ")", "background-size":"cover"});
  background = "?img=" + img.replace("assets/img/backgrounds/", "").replace(".jpg", "");
  if (background.includes("https://playname.github.io/")) {
    background = background.replace("https://playname.github.io/", "");
  }
}

function bgByUrl() {
  var url = $("#bgUrl").val();
  $("body").css({"background-image":"url('" + url + "')", "background-size":"cover"});
  background = "?url=" + url;
}

function bgByLink(url) {
  console.log(url);
  $("body").css({"background-image":"url(" + url + ")", "background-size":"cover"});
  background = "?url=" + url;
}

function konami() {
  $(document).keydown(function(e) {
    if (!pressed) {
      if (e.which == 38 && stage <= 2) stage++;
      else if (e.which == 40 && stage <= 3) stage++;
      else if (e.which == 37 && stage == 4) stage++;
      else if (e.which == 39 && stage == 5) stage++;
      else if (e.which == 37 && stage == 6) stage++;
      else if (e.which == 39 && stage == 7) stage++;
      else if (e.which == 66 && stage == 8) stage++;
      else if (e.which == 65 && stage == 9) stage++;
      else if (e.which == 13 && stage == 10) {k = false; replace();}
      else stage = 0;
      pressed = true;
    }
  });
  $(document).keyup(function(e) {if (pressed) {pressed = false;}});
}

function replace() {
  $("#video").replaceWith('<iframe width="560" height="315" src="https://www.youtube.com/embed/jI-kpVh6e1U" frameborder="0" allowfullscreen></iframe>');
}
