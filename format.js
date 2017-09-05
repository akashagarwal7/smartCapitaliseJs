document.getElementById('my-form').onsubmit = function() {
	var strr = document.getElementById("ta1").value.toLowerCase();
	console.log (strr);
	var promise = new RSVP.Promise(function(fulfill, reject) {
		strr = strr.replace(/(^.)|(\si(\s|\'))|(\.\s[a-z])/gm, function (match) { 
			return match.toUpperCase();
		});
		if (strr !== '')
			fulfill(strr);
		else reject(strr);
	});
	promise.then (function (strr) {
		document.getElementById("ta2").value = strr;
	}, function (strr) {
		console.log("This sucks");
	});
	return false;
}