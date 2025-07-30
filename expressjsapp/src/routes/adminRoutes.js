const express = require('express')
const adminRoutes = express.Router();
const adminController = require('../controller/adminController')




adminRoutes.get('/getUsers', adminController.getAllusers)

adminRoutes.delete('/deleteUser/:id', adminController.deleteById)

module.exports = adminRoutes;