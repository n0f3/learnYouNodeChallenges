var http = require("http");
var urlsToQuery = [process.argv[2], process.argv[3], process.argv[4]];
var totalData = "";
var toPrint = [];
var numOfEndedConnection = 0;

var printAll = function (list) {
  for(var i = 0; i < list.length; ++i) {
    console.log(list[i]);
  }
};

var responseGetter = function(responseIndex, urlToQuery) {
  http.get(urlToQuery, function(response) {
    var data = "";
    response.setEncoding("utf-8");
    response.on("data", function(dataToProcess) {
      data += dataToProcess;
    });
    response.on("error", function(error) {
      console.error("There was an error processing the request: " + error.toString());
    });
    response.on("end", function() {
      numOfEndedConnection++;
      toPrint[responseIndex] = data;
      if(numOfEndedConnection >= urlsToQuery.length) {
        printAll(toPrint);
      }
    });
  });
};

for(var i = 0; i < urlsToQuery.length; ++i) {
  responseGetter(i, urlsToQuery[i]);
}


