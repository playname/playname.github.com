/*function showHint(text, parent) { $("#"+parent).append("<div id='"+parent+"hint'>"+text+""); }
function hideHint(hintId) { $("#"+hintId).remove(); }*/

//Konami code
var k = true;
var stage = 0;
var pressed = false;
//Url
var background;

setTimeout(function() {window.onload = setup();}, 500);

function setup() {
  var args = location.search.split("=");

  if (args[0] == "?url")
    changeBg(args[1]);
  else if (args[0] == "?img")
    changeBg("https://playname.github.io/assets/img/backgrounds/" + args[1] + ".jpg");

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
  if (!background) {
    var url = "https://playname.github.io/";
    $("#siteUrl").val(url);
  } else {
    var url = "https://playname.github.io/" + background;
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
  $("body").css({"background-image":"url(" + img + ")", "background-size":"cover"});
  background = "?img=" + img.replace("assets/img/backgrounds/", "").replace(".jpg", "");
}

function bgByUrl() {
  var url = $("#bgUrl").val();
  $("body").css({"background-image":"url('" + url + "')", "background-size":"cover"});
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
