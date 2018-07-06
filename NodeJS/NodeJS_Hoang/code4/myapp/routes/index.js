var express = require('../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
