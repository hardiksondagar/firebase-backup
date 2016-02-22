var https = require('https'),fs = require('fs');

/* Set FIREBASE_URL and FIREBASE_SECRET */
var FIREBASE_URL = 'YOUR_FIREBASE_URL';
var FIREBASE_SECRET = 'YOUR_FIREBASE_SECRET';

function fetchData(){

	var url = FIREBASE_URL+'/.json?format=export&auth='+FIREBASE_SECRET;

	var scoreReq = https.get(url, function (response) {
		var completeResponse = '';
		response.on('data', function (chunk) {
			completeResponse += chunk;
		});
		response.on('end', function() {
			backup(completeResponse);
		})
	}).on('error', function (e) {
		console.log('[ERROR] '+new Date()+' problem with request: ' + e.message);
	});

}

function backup(data) {
	var filename = getFileName('json');
	writeToFile(filename,data);
}

function getFileName(format){
        return __dirname+'/backup/'+(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''))+'.'+format;
}

function writeToFile(filename,data){
	fs.writeFile(filename, data, function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("[SUCCESS] "+new Date()+" JSON saved to " + filename);
		}
	});
}

function init() {
	fetchData();
	setInterval(fetchData, 86400000);
}

init();
