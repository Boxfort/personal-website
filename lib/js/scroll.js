$(document).ready(function(){
	console.log("hi");
	$("#down-link").click(function(){
		console.log("doot");
		var height = $(window).height();
		$('html, body').animate({
			scrollTop: height
		}, 800);
	});
});

