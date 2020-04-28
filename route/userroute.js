const express = require("express");

const app = express();
const userRouter = express.Router();

userRouter.route('/users')
    .get((req, res) => {
        console.log("Hello");
        const book = { bookname1: "Hello my firstbook" };

        res.json(book);

    });

    module.exports = userRouter;