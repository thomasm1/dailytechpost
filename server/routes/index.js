const express = require('express');
require('express-ws')(express);

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });  // index == dir

});

// router.ws('/ws/', (ws, req) => { // WEB SOCKET
//   ws.on('message', (msg) => {
//     ws.send(msg);
//   });
// });
module.exports = router;

