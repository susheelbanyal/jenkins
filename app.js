var express = require('express');
var app = express();

console.log("=====  fff asdhi there============");
app.get('/',function(req,res) {
  res.send("Hello World");
});

app.listen(4000);
