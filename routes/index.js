const express = require('express'); 

const router = express.Router();  // Router class

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });  // index == dir

});
 
module.exports = router;

