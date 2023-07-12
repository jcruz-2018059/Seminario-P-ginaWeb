'use strict'

require('dotenv').config();
const mongo = require('./config/mongo');
const app = require('./config/app')

mongo.connect();
app.initServer();
