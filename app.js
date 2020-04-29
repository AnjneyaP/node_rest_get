/* jshint node: true */
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRouter = require('./route/userroute');
const port = process.env.PORT || 3000;
const db = mongoose.connect('mongodb://localhost/bookAPI')


app.use('/api',userRouter);

app.get('/', (req, res) => {

    res.send('Hello my nodeman test');

});

app.listen(port, () => {

    console.log("App is runnung on " + port);

});