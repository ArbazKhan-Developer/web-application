const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.getUser)

router.get('/:id', userController.getUser)

router.post('/create', userController.postUser)

module.exports = router