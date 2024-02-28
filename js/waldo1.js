//express
const express = require('express')
const app = express();
const waldo1 = express.Router();
// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

waldo1.get("/waldo1", (req, res) => {
    res.render('waldo1', { waldo: waldo });
});

let waldo = 0;
waldo1.post("/waldo1", async (req, res, next) => {
    if (waldo < 5) {
        waldo += 1;
        res.redirect("waldo1");
    } else {
        res.status(204).send();//Keeps user on same page
    }

    console.log("Waldo button clicked times: " + waldo);
});

module.exports = waldo1;