var express = require('express');
var app = express();

console.log("hi there============");
app.get('/',function(req,res) {
  res.send("Hello World");
});



app.listen(4000);
