// Sync
/*var fs = require('fs');
var pathToFile = process.argv[2];
var bufferObj = fs.readFileSync(pathToFile);
console.log(bufferObj.toString().split('\n').length - 1);*/
//Async
// var fs = require("fs");
// var pathToFile = process.argv[2];
// fs.readFile(pathToFile, 'utf-8', 
// 	function(err, bufferObj){
// 		if(err !== null) {
// 			console.log(err);
// 			return;
// 		}
// 		console.log(bufferObj.toString().split('\n').length - 1);
// 	});
// filter files
var pathToDir = process.argv[2];
var extensionToFilter = process.argv[3];
var readDir = require("./readDir.js");
var printDirList = function(error, data) {
	if(error) {
		console.error("There was an error: " + error);
		return;
	}
	data.forEach(function(fileName) { console.log(fileName) ; });
};
readDir(pathToDir, extensionToFilter, printDirList);