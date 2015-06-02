var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(request, response) {
  if(request.method === 'GET') {
    var parsedUrl = url.parse(request.url, true);
    var dateFromIso = new Date(parsedUrl.query.iso);
    switch(parsedUrl.pathname) {
      case "/api/parsetime":
        var dateJson = {};
        dateJson.hour = dateFromIso.getHours();
        dateJson.minute = dateFromIso.getMinutes();
        dateJson.second = dateFromIso.getSeconds();
        response.writeHead(200, {'Content-Type': 'application/json' });
        response.write(JSON.stringify(dateJson));
      break;
      case "/api/unixtime":
        response.writeHead(200, {'Content-Type': 'application/json' });
        response.write(JSON.stringify({unixtime: dateFromIso.getTime()}));
      break;
      default:
        response.writeHead(404);
    }
    response.end();
  }
});

server.listen(port);