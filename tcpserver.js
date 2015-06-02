var net = require("net");
var port = process.argv[2];

function zeroFill(number) {
  return (number > 10) ? '' : '0' + number;
}

function getDateTime() {
  var date = new Date();
  var fullYear = date.getFullYear();
  var month = date.getMonth() + 1; // starts at 0
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes(); 
  return fullYear + "-" + zeroFill(month) + "-" + zeroFill(day) + " " + hours + ":" + minutes + "\n";
}

var serverInstance = net.createServer(function(socket) {
  socket.end(getDateTime());
});
serverInstance.listen(port);