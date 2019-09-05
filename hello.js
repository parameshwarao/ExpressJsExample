const express = require("express");
const app = express();

var http = require('http');


app.http.createServer(function callback(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end('hello World  \n');
}).listen(3000);
console.log('listening at 3000');