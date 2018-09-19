const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const router = require('./server/routes');

app.use(express.static(path.join(__dirname, 'client/dist/client')));
app.use(bodyParser.urlencoded({extended:true})); // allow deep parsing that can deal w/ nested objects
app.use(bodyParser.json()); // parse json data

router(app);

app.listen(8000, errs => console.log(errs?errs:"running app"));

