const http = require('http');

function rqListener(req,res){
console.log(req);
}
//http.createServer() executes rqListener for every incoming requests
const server = http.createServer(rqListener)

// Can also pass anonymous function to createServer()
// http.createServer(function (req,res){
// })

server.listen(3000);
