//this is our web server
//it will be coded in javascript

const express   = require('express');       //require == #include
const app       = express();
const http      = require('http');
const server    = require('http').createServer(app);  

const LISTEN_PORT = 8080;           //default port 80

server.listen(LISTEN_PORT);         //starts server
console.log("Listening on port: " + LISTEN_PORT);

app.use(express.static(__dirname + '')); //set root of server to public folder



