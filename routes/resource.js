var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var eatable_controller = require('../controllers/eatable');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/eatables', eatable_controller.eatable_create_post);
// DELETE request to delete Costume.
router.delete('/eatables/:id', eatable_controller.eatable_delete);
// PUT request to update Costume.
router.put('/eatables/:id', eatable_controller.eatable_update_put);
// GET request for one Costume.
router.get('/eatables/:id', eatable_controller.eatable_detail);
// GET request for list of all Costume items.
router.get('/eatables', eatable_controller.eatable_list);

module.exports = router;