var express = require('express');
var router = express.Router();

/* GET Conners page. */
router.get('/', function(req, res, next) {
  res.render('connerspage', {title: 'Conners Beast of a Webpage' })
})

module.exports = router;
