//express
const express = require('express')
const app = express();
const port = 3000;
const path = require("path");
app.use(express.urlencoded({ extended: false }));
// ejs
const ejs = require('ejs');
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


//Routes
const waldo1Router = require("./waldo1");

app.use("/", waldo1Router);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}/homepage`);
});