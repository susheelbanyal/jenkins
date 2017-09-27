var express = require('express');
var app = express();

console.log("=====  asdhi there============");
app.get('/',function(req,res) {
  res.send("Hello World");
});

app.listen(4000);
