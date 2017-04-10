function showHint(text, parent) { $("#"+parent).append("<div id='"+parent+"hint'>"+text+""); }

function hideHint(hintId) { $("#"+hintId).remove(); }