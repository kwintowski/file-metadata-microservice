var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var multer = require('multer');
//var storage = multer.memoryStorage();
var upload = multer();

console.log("Hello World");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.post('/api/fileanalyse', upload.single('upfile'), function(req,res,next){
    console.log(req.file);
    res.send({"filename":req.file.originalname,"type":req.file.mimetype,"size":req.file.size});
});


module.exports = app;