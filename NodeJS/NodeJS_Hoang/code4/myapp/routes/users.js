var express = require('../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
