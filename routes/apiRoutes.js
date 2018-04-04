var router = require('express').Router();
var productController = require('../controller/productController');

router.get('/id',productController.find);
router.post('/new', productController.create);

module.exports = router;