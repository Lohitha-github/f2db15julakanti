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
exports.eatable_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Eatable.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);

    }
};
// Handle Eatable create on POST.
exports.eatable_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Eatable();
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
exports.eatable_delete = async function (req, res) {
        console.log("delete " + req.params.id)
        try {
            result = await Eatable.findByIdAndDelete(req.params.id)
            console.log("Removed " + result)
            res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": Error deleting ${err}}`);
        }
    };
// Handle Eatable update form on PUT.
exports.eatable_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Eatable.findById(req.params.id)
        // Do updates of properties 
        if (req.body.eatable_name)
            toUpdate.eatable_name = req.body.eatable_name;
        if (req.body.flavor) toUpdate.flavor = req.body.flavor;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};
exports.eatable_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Eatable.findById(req.query.id)
        res.render('eatabledetail',
            { title: 'Eatable Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
exports.eatable_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('eatablecreate', { title: 'Eatable Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
exports.eatable_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Eatable.findById(req.query.id)
        res.render('eatableupdate', { title: 'Eatable Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
exports.eatable_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Eatable.findById(req.query.id)
    res.render('eatabledelete', { title: 'Eatable Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
}