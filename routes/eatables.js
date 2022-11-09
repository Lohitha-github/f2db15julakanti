var express = require('express');
const eatable_controlers= require('../controllers/eatable');
var router = express.Router();
/* GET eatables */
router.get('/', eatable_controlers.eatable_view_all_Page );
module.exports = router;