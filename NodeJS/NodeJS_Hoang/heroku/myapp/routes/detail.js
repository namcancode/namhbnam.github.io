var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.user){
		const dataUser = req.session.user.checkId
		res.render("detail", {dataUser, username: dataUser.username, avatar:dataUser.avatar});
	}
else{
	const dataUser = null
	res.render("detail",{dataUser});
}
});

module.exports = router;
