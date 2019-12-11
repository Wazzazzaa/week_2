var express = require('express');
var router = express.Router();

const userController = require('./userController');
router.post('/', userController.user_list_get);
router.get('/:id', userController.user_get);
module.exports = router;
