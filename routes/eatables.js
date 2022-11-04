var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('eatables', { title: 'JULAKANTI LOHITHA Search Results' });
});

module.exports = router;
