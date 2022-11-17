var express = require('express');
const eatable_controlers= require('../controllers/eatable');
var router = express.Router();
/* GET eatables */
router.get('/', eatable_controlers.eatable_view_all_Page );
router.get('/detail', eatable_controlers.eatable_view_one_Page);
router.get('/create', eatable_controlers.eatable_create_Page);
router.get('/update', eatable_controlers.eatable_update_Page);
router.get('/delete', eatable_controlers.eatable_delete_Page);
module.exports = router;