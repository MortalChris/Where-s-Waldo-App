//express
const express = require('express')
const app = express();
const waldo1 = express.Router();
// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

waldo1.get("/homepage", (req, res) => {
    res.render('homepage');
});

module.exports = waldo1;