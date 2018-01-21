$(document).ready(function(){
	var full = "";
	var last = "";
	var allowdot = 1;
	var opex = /[+/*-]/;
	var temp = "";
	var lastop = ""
	function operationCheck(str){
		// checks if there are 2 operation symbols at the end of the string, if there are, it only returns the string with the last operation symbol
		if (opex.test(str[str.length - 1]) && opex.test(str[str.length - 2])){ str = str.substring(0, str.length - 2) + str[str.length - 1]; }
		if (opex.test(str[0])){str = str.substring(1);}
		return str;
	}
	function dotCheck(str){
		// checks if the last character is a dot, if it is, it doesn't let the string to have more than 1 dot
		var dotex = /\./;
		if (dotex.test(str[str.length - 1]) && dotex.test(str[str.length - 2])){ str = str.substring(0, str.length - 1); }
		if (dotex.test(str[0])){str = 0 + str;}
		return str;
	}
	$(".num").on("click", function(){
		if (typeof full == "number"){full = "";}
		last += $(this).data("value");
		last = dotCheck(last);
		$("#last").text(last);
		$("#full").text(full);
	});
	$(".dot").on("click", function(){
		if (allowdot == 0){return;}
		if (typeof full == "number"){ last = String(full); }
		last += $(this).data("value");
		last = dotCheck(last);
		$("#last").text(last);
		$("#full").text(full);
		allowdot = 0;
	});
	$(".opr").on("click", function(){
		full += last + $(this).data("value");
		lastop = $(this).data("value");
		full = operationCheck(full);
		$("#full").text(full);
		temp = last;
		last = "";
		allowdot = 1;
	});
	$("#evl").on("click", function(){
		if (typeof full == "number"){ full += lastop + temp; }
		else {full += temp;}
		if (opex.test(full[full.length - 1])){full = full.substring(0, full.length - 1);}
		$("#full").text(full);
		full = eval(full);
		$("#last").text(full);
		last = "";
		allowdot = 1;
	});
	$("#CE").on("click", function(){
		last = "";
		$("#last").text(last);
		allowdot = 1;
	});
	$("#C").on("click", function(){
		last = "";
		full = "";
		$("#full").text(full);
		$("#last").text(last);
		allowdot = 1;
	});
});