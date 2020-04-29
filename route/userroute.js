const express = require("express");

const app = express();
const userRouter = express.Router();
const Book = require('../model/bookmodel');

userRouter.route('/users')
    .get((req, res) => {

        Book.find((err, books) => {

            return res.json(books);
        }   
        )
    });

    module.exports = userRouter;