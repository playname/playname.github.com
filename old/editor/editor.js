var h = false;
var code;

function run() {
	if (h)
		$("#window").html(code);
	else
		$("#window").html($("#code").val());
}

function highlight() {
	if (!h) {
		code = $("#code").val();
		$("#code").replaceWith("<pre id='cc'><code class='language-html' id='hcode'></code></pre>");
		$("#cc").prop("style", "width: 46vw; height: 86vh;");
		$("#hcode").text(code);
		$("#highlight").text("Edit");
		Prism.highlightAll();
		h = true;
	} else {
		$("#cc").replaceWith("<textarea id='code'></textarea>");
		$("#code").text(code);
		$("#highlight").text("Highlight");
		h = false;
	}
}