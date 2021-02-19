var express = require('express');
var app = express();
//var fs = require("fs");

app.get('/', function (req, res) {
      console.log( "hello" );
      res.send( "hiiiiiiiiii" );
})
app.get('/login', function (req, res) {
    console.log( "hello login" );
    res.send( "hiiiiiiiiii login" );
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at localhost", port)
})