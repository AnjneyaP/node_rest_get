const express = require("express");

const app = express();
const userRouter = express.Router();
const Book = require('../model/bookmodel');


    userRouter.route('/users')
    .get((req, res) => {

        const query = {};

        if(req.query.genre)
        {
            query.genre = req.query.genre;
        }
         Book.find(query,(err, books) => {

            return res.json(books);
        }   
        )
    });

    userRouter.route('/users/:bookId')
    .get((req, res) => {

         Book.findById(req.params.bookId,(err, book) => {

            return res.json(book);
        }   
        )
    });


module.exports = userRouter;