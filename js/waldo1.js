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

// let item = 0;
let waldo = 0;

waldo1.post("/waldo1", async (req, res, next) => {
    //If you find items adds to tally
    // if (item < 5) {
    //     item += 1;
    //     res.redirect("waldo1");
    // } else {
    //     res.status(204).send();//Keeps user on same page
    // }
    //If you find waldos adds to tally
    if (waldo < 3) {
        waldo += 1;
        res.redirect("waldo1");
    } else {
        res.status(204).send();//Keeps user on same page
    }

    console.log("Waldo button clicked times: " + waldo);
});

module.exports = waldo1;