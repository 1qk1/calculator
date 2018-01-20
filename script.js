$(document).ready(function(){
	var full = "";
	var last = "";
	function operationCheck(str){
		// checks if there are 2 operation symbols at the end of the string, if there are, it only returns the string with the last operation symbol
		var opex = /[+/*-]/;
		if (opex.test(str[str.length - 1]) && opex.test(str[str.length - 2])){ str = str.substring(0, str.length - 2) + str[str.length - 1]; }
		return str;
	}
	function dotCheck(str){
		// checks if the last character is a dot, if it is, it doesn't let the string to have more than 1 dot
		var dotex = /\./;
		if (dotex.test(str[str.length - 1]) && dotex.test(str[str.length - 2])){ str = str.substring(0, str.length - 1); }
		return str;
	}
	$(".num").on("click", function(){
		if (typeof full == "number"){full = "";}
		last+= $(this).data("value");
		last = dotCheck(last);
		$("#last").text(last);
		$("#full").text(full);
	});
	$(".opr").on("click", function(){
		full+= last + $(this).data("value");
		full = operationCheck(full);
		$("#full").text(full);
		last="";
	});
	$("#evl").on("click", function(){
		full+= last;
		$("#full").text(full);
		full=eval(full);
		$("#last").text(full);
		last="";
	});
	$("#CE").on("click", function(){
		last = "";
		$("#last").text(last);
	});
	$("#C").on("click", function(){
		last = "";
		full = "";
		$("#full").text(full);
		$("#last").text(last);
	});
});