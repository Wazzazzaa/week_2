var express = require('express');
var router = express.Router();

const catController = require('./catController');
router.get('/', catController.cat_list_get);
router.get('/:id', catController.cat_get);
module.exports = router;
