const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );

const port = process.env.PORT || 3050;
app.listen( port, () => console.log(`Listening on port: ${port}`) );