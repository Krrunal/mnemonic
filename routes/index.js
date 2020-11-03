var express = require('express');
var router = express.Router();
const url = require('url');
 
var HdkeyController =  require('../controllers/HdkeyController');

router.post('/hdkey', HdkeyController.index);  
router.post('/passwordkey', HdkeyController.password);
module.exports = router;  

   