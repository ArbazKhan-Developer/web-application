require('dotenv').config()
const express = require('express');
const app = express();
const auth = require('./middleware/auth')
const errorHandler = require('./middleware/errorHandler');
const routes = require('././routes/userRoutes');
const adminRoutes = require('././routes/adminRoutes')
const connectDB = require('./dao/mongodbDao')
app.use(express.json())
app.use(auth)


connectDB();
app.use('/api/users', routes)
app.use('/api/admin', adminRoutes)

app.use(errorHandler);

module.exports = app