var express = require('express');
var router = express.Router();
import createRoom from '../controllers/createRoomController.js'
/* GET home page. */
router.get('/', function(req, res, next) {
  const url = req.protocol + '://' + req.hostname+':'+4000
  res.render('index', { url });
});

module.exports = router;
