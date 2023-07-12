'use strict'

const express = require('express');
const api = express.Router()
const commentController = require('./comment.controller');
const { ensureAuth } = require('../services/jwt')

api.post('/add', commentController.addComment);
api.get('/getAll', commentController.getAllComments);
api.get('/serch', commentController.serchComments);
api.delete('/delete/:id', ensureAuth, commentController.deleteComment);

module.exports = api;
