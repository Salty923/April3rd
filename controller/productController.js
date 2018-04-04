var db = require('../models');

module.exports ={
    find: function (req,res) {
        db.Product.findOne({_id: req.params.id}).then(function(dbProduct){
            res.json(dbProduct);
        })
    },
    create: function (req, res) {
        db.Product.create(req.body);
    }
}