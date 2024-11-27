const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const caseRoutes = require('./routes/caseRoutes'); 
//imports all the routes defined in the caseRoutes.js file.

app.use("/api/cases", caseRoutes) 
//specifies that any requests that start with /api/cases should be handled by the caseRoutes router.

module.exports = app;
