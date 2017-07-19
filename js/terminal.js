var asciiArt = [" __        __   _                          </br>",
             " \\ \\      / /__| | ___ ___  _ __ ___   ___ </br>",
             "  \\ \\ /\\ / / _ \\ |/ __/ _ \\| '_ ` _ \\ / _ \\ </br>",
             "   \\ V  V /  __/ | (_| (_) | | | | | |  __/</br>",
             "    \\_/\\_/ \\___|_|\\___\\___/|_| |_| |_|\\___|</br>",
             "                                           </br>"
];

var loadingBar = [
"[                     ] 0%",
"[##                   ] 11%",
"[####                 ] 19%",
"[######               ] 32%",
"[###########          ] 57%",
"[##############       ] 84%",
"[#################### ] 99%",
"[#####################] 100%"
]


function typeText(text, interval, callback){
	for (var i = 0; i < text.length; i++) {
		if(i == text.length - 1){
			doTimeout(text[i], i, interval, callback);
		}else{
			doTimeout(text[i], i, interval);
		}
	}
}

function printLoadBar(array, interval, callback){
	$("#terminal-cursor").before("Initializing: <div id='loadbar'></div>")
	for (var i = 0; i < array.length; i++){
		if(i == array.length - 1){
			doTimeoutLoadBar(array[i], i, interval, callback);
		}else{
			doTimeoutLoadBar(array[i], i, interval);
		}
	}
}

function doTimeoutLoadBar(text, i, interval, callback){
	setTimeout(function(){
		$("#loadbar").html(text);
		if(callback !== undefined){
			callback();
		}
	},i * interval);
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
		$("#terminal-cursor").before("<span class='color-text'>root@192.168.0.1:~$ </span>");
		wait(2500, callback);
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
		$("#terminal-cursor").before("<span class='color-text'>root@"+hostname+":/# </span>");
		wait(1200, callback);
	},
	function(callback){
		typeText("cd ~/Public/Website", 80, callback);
	},
	function(callback){
		wait(650, callback);
	},
	function(callback){
		$("#terminal-cursor").before("</br>");
		$("#terminal-cursor").before("<span class='color-text'>root@"+hostname+":~/Public/Website# </span>");
		wait(400, callback);
	},
	function(callback){
		typeText("./init.sh", 70, callback);	
	},
	function(callback){
		$("#terminal-cursor").before("</br>");
		wait(460, callback);
	},
	function(callback){
		$("#terminal-cursor").before("<div id='ascii'></div>")
		for(var i = 0; i < asciiArt.length; i++){
			$("#ascii").append(asciiArt[i]);
		}
		printLoadBar(loadingBar, 500, callback);
	},
	function(callback){
		wait(200, callback);
	},
	function(callback){
		$("#terminal-cursor").before("Launching");
		wait(750, callback);
	},
	function(callback){
		typeText("...", 750, callback);
	},
	function(callback){
		wait(1000, callback);
	},
	function(){
		//Load the actual website
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
	runQueue(queue);
});
