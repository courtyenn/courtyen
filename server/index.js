// const static = require('node-static');
const http = require('http');

// const file = new(static.Server)(__dirname + '/public');
// console.log(process.env.PORT)
http.createServer(function (req, res) {
  file.serve(req, res);

}).listen(process.env.PORT);
