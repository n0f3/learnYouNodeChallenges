var fs = require("fs");
function readDirectory(dirPath, extFilter, callback) {
	var readDirCallback = function(err, list) {
		if(err !== null) {
			return callback(err);
		}
		var filterPath = function(filename) {
			var path = require("path");
			return path.extname(filename).substring(1) === extFilter;
		}
		var filtered = list.filter(filterPath);
		return callback(null, filtered);
	};
	fs.readdir(dirPath, readDirCallback);
};
module.exports = readDirectory;
