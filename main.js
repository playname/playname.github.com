/*function showHint(text, parent) { $("#"+parent).append("<div id='"+parent+"hint'>"+text+""); }
function hideHint(hintId) { $("#"+hintId).remove(); }*/
var repeat = true;
var stage = 0;
var pressed = false;

window.onload = konami();

function konami() {
  if (repeat) requestAnimationFrame(konami);

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
      else if (e.which == 13 && stage == 10) {repeat = false; replace();}
      else stage = 0;
      pressed = true;
    }
  });
  $(document).keyup(function(e) {if (pressed) {pressed = false;}});
}

function replace() {
  $("#video").replaceWith('<iframe width="560" height="315" src="https://www.youtube.com/embed/jI-kpVh6e1U" frameborder="0" allowfullscreen></iframe>');
}
