window.onload = terminal();
var pressed = false;
var commands = ["cd [LINK]", " clear", " echo [TEXT]", " exit", " help", " ls"];
var links = ["Youtube", "Github", "Reddit", "Pong", "CodeEditor", "Terminal"];

function terminal() {
	$("#input").focus();
	requestAnimationFrame(terminal);
	$("#input").keypress(function(e) {
		if (!pressed && e.which == 13 && $("#input").val() != "") {
			pressed = true;
			test($("#input").val());
			$("#input").val("");
		}
	});
	$("#input").keyup(function(e) {if (pressed) {pressed = false;}});
}

function test(text) {
	echo("root:~$ "+text);

	if (text.split(" ")[0] == "cd") {cd(text);}

	else if (text == "clear") {$(".output").remove(); $("<div class='output'></div>").appendTo(document.body);}

	else if (text.split(" ")[0] == "echo") {echo(text, true);}

	else if (text == "exit") {window.location.href = "https://playname.github.io";}

	else if (text == "help") {help();}

	else if (text == "ls") {ls();}

	else {echo('Command "'+text+'" not found.');}
}

function echo(text, isCmd) {
	if (isCmd) {
		var s = text.split(" ");
		var string = "";
		for (var i = 1; i < s.length; i++) {
			string = string+s[i]+" ";
		}
		$("#output").prepend("<div class='output'>"+string+"</div>");

	} else {
		$("#output").prepend("<div class='output'>"+text+"</div>");
	}
}

function help() {
	for (var i = 0; i < commands.length; i++) {
		echo(commands[i], false);
	}
}

function ls() {
	for (var i = 0; i < links.length; i++) {
		echo(links[i], false);
	}
}

function cd(link) {
	switch(link.split(" ")[1]) {
		case "Youtube":
			window.location.href = "https://www.youtube.com/channel/UChVH_oFqQV6j8zOpZawz1zQ";
			break;
		case "Github":
			window.location.href = "https://github.com/playname";
			break;
		case "Reddit":
			window.location.href = "https://www.reddit.com/user/Playname";
			break;
		case "Pong":
			window.location.href = "https://playname.github.io/Pong";
			break;
		case "CodeEditor":
			window.location.href = "https://playname.github.io/editor";
			break;
		case "Terminal":
			window.location.href = "https://playname.github.io/terminal";
			break;
		default:
			echo('Link "'+link+'" not found.', false);
			break;
	}
}
