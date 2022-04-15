const express = require('express');
require('express-ws')(express);

const router = express.Router();

router.ws('/ws/', (ws, req) => { // WEB SOCKET
  ws.on('message', (msg) => {
    ws.send(msg);
  });
});
module.exports = router;

