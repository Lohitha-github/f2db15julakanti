var express = require('express');
const eatable_controlers= require('../controllers/eatable');
var router = express.Router();
/* GET eatables */
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
router.get('/', eatable_controlers.eatable_view_all_Page );
router.get('/detail',secured, eatable_controlers.eatable_view_one_Page);
router.get('/create',secured, eatable_controlers.eatable_create_Page);
router.get('/update',secured, eatable_controlers.eatable_update_Page);
router.get('/delete',secured, eatable_controlers.eatable_delete_Page);
module.exports = router;