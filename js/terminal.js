var asciiArt = [
"     _            _         _              _                           </br>",
"    | | __ _  ___| | __    / \   _ __   __| | ___ _ __ ___  ___  _ __  </br>",
" _  | |/ _` |/ __| |/ /   / _ \ | '_ \ / _` |/ _ \ '__/ __|/ _ \| '_ \ </br>",
"  |_| | (_| | (__|   <   / ___ \| | | | (_| |  __/ |  \__ \ (_) | | | |</br>",
" \___/ \__,_|\___|_|\_\ /_/   \_\_| |_|\__,_|\___|_|  |___/\___/|_| |_|</br>",
"                                                                       </br>"
];

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

function wait(time, callback){
	setTimeout(function(){
		if(callback !== undefined){
			callback();
		}
	}, time);
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

var hostname = "45.55.248.198";

//The queue is the sequence of timed events that take place, in order.
var queue = [
	function(callback){
		wait(2000, callback);
	},
	function(callback){
		typeText("First line!", 75, callback);
	},
	function(callback){
		$("#terminal-cursor").before("</br>");
		$("#terminal-cursor").before("<span style='color:green'>root@192.168.0.1:~$ </span>");
		wait(1200, callback);
	},
	function(callback){
		typeText("ssh root@"+hostname, 75, callback);
	},
	function(callback){
		$("#terminal-cursor").before("</br>");
		$("#terminal-cursor").before("The authenticity of host "+hostname+" can't be established. ECDSA key fingerprint is bd:e5:e1:47:97:11:44:39:6a:2d:6e:15:ab:ca. </br>Are you sure you want to continue connecting (yes/no)? ");
		wait(3500, callback);
	},
	function(callback){
		typeText("yes", 100, callback);
	},
	function(callback){
		wait(500, callback);
	},
	function(callback){
		$("#terminal-cursor").before("</br>");
		$("#terminal-cursor").before("Warning: Permanently added '"+hostname+ "' (ECDSA) to the list of known hosts.");
		$("#terminal-cursor").before("</br>");
		$("#terminal-cursor").before(hostname+"'s password: ");
		wait(6000, callback);
	},
	function(callback){
		$("#terminal-cursor").before("</br>");
		$("#terminal-cursor").before("<span style='color:green'>root@"+hostname+":/# </span>");

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
	runQueue(queue);
});
