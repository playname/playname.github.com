window.onload = (function() {
	setInterval(function() {
		prettyPrint();
	}, 500)});

function run() {
	document.getElementById("window").innerHTML = document.getElementById("code").value;
}