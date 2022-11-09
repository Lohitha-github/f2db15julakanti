var Eatable = require('../models/eatable');
exports.eatable_view_all_Page = async function (req, res) {
    try {
        theEatables = await Eatable.find();
        console.log("came here");
        res.render('eatables', { title: 'Eatable Search Results', results: theEatables });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// List of all Eatables
exports.eatable_list = async function (req, res) {
    try {
        theEatable = await Eatable.find();
        res.send(theEatable);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Eatable.
exports.eatable_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Eatable detail: ' + req.params.id);
};
// Handle Eatable create on POST.
exports.eatable_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Eatable();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"eatable_type":"goat", "cost":12, "size":"large"}
    document.eatable_name = req.body.eatable_name;
    document.flavor = req.body.flavor;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Eatable delete form on DELETE.
exports.eatable_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Eatable delete DELETE ' + req.params.id);
};
// Handle Eatable update form on PUT.
exports.eatable_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Eatable update PUT' + req.params.id);
};