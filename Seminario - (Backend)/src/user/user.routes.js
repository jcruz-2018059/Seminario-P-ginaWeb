'use strict'

const express = require('express');
const api = express.Router()
const userController = require('./user.controller');
const { ensureAuth } = require('../services/jwt')

api.post('/login', userController.login);
api.put('/updatePassword/:id', ensureAuth, userController.updatePassword);

module.exports = api;