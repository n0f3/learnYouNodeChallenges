var http = require("http");
var fs = require("fs");
var port = process.argv[2];
var fileToServe = process.argv[3];
// var server = http.createServer(function(request, response) {
//   console.log("opening read stream with file location: " + fileToServe);
//   var readStream = fs.createReadStream(fileToServe);
//   readStream.on('error', function(message) {
//     console.error("There was an error creating the read stream: " + message);
//   });
//   readStream.on('close', function() {
//   });
//   readStream.on('end', function() {
//     response.end();
//   });
//   readStream.on('data', function(chunkOfData) {
//     response.write(chunkOfData);
//   });
// });
// server.listen(port);

var server = http.createServer(function(request, response) {
  fs.createReadStream(fileToServe).pipe(response);
});
server.listen(port);