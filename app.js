var express = require('express');
global.app = express(); 
global.moment = require('moment');
const expressValidator = require('express-validator');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');

 
 
 
global.nodeSiteUrl = 'http://demo.com:8080'; // node  

var path = require('path');

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});   
app.use(bodyParser.json());  
app.use(express.urlencoded({limit: '100mb',extended: true })); 
 

var indexRouter = require('./routes/index');
app.use('/', indexRouter); 


var server = app.listen(8080, function () { 
    console.log("Example app listening at http://demo.com:%s", 8080);
});   

    
process.on('uncaughtException', function (err) { 
    console.log('Caught exception: ' + err);
});  

 
