const express = require("express");
const port = 3000;
const app = express();

// connect to server with port: 3000
app.listen(port, function(){
  console.log("connected to port: " + port);
});

// To load index.html file in server
app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html"); //file path
});
app.use(express.static('public')); //
