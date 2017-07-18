function typeText(text, interval, callback){
	for (var i = 0; i < text.length; i++) {
		if(i == text.length - 1){
			doTimeout(text[i], i, interval, callback);
		}else{
			doTimeout(text[i], i, interval)
		}
	}
}

function doTimeout(text, i, interval, callback){
	setTimeout(function(){
		$("#terminal-cursor").before(text);
		if(callback !== undefined){
			callback();
		}
	},i * interval);
}

function popFirst(array) {
	//Remove first item from array and return it.
	if(array !== undefined){
		var item = array[0];
		array.splice(0, 1);
		console.log(array);
		return item;
	}
	return null;
}

//The queue is the sequence of timed events that take place, in order.
var queue = [
	function(callback){
		console.log("i ran!");
		typeText("First line!", 75, callback);
	},
	function(callback){
		console.log("me too !");
		typeText("Second line!", 75, callback);
	}
];

function runQueue(array){
	//Runs the first item in the array and passes it
	//the run function so that it can in turn keep
	//calling items to be run.
	var toRun = popFirst(array);
	if(toRun == null){
		return;	
	}
	toRun(function(){
		runQueue(array);
	});
}

$( document ).ready(function(){
	//Opening Sequence
	$("#terminal-cursor").before("<span style='color:green'>root@192.168.0.1:~$ </span>");
	console.log(queue);
	runQueue(queue);
});
