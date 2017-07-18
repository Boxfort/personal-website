$( document ).ready(function(){
	console.log("READY!");
	//Do the sequence here !
	function typeText(text, interval){
		console.log("Called function");
		for (var i = 0; i < text.length; i++) {
			doTimeout(text[i], i, interval);
		}
	}

	function doTimeout(text, i, interval){
		setTimeout(function(){
			console.log(text);
			$("#terminal").append(text);
		},i * interval);
	}

	typeText("This is a test", 100);
});
