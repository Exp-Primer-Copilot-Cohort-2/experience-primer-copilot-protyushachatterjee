// Create web server

// Import modules
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

// Create server
http.createServer(function(req, res) {
  // Get URL
  var pathname = url.parse(req.url).pathname;
  console.log('Request for ' + pathname + ' received.');

  // Read file
  fs.readFile(pathname.substr(1), function(err, data) {
    if (err) {
      console.log(err);
      // HTTP Status: 404 : NOT FOUND
      // Content Type: text/plain
      res.writeHead(404, {'Content-Type': 'text/html'});
    } else {
      // Page found
      // HTTP Status: 200 : OK
      // Content Type: text/plain
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Write content to response body
      res.write(data.toString());
    }
    // Send response body
    res.end();
  });
}).listen(8081);

// Console will print
console.log('Server running at http://