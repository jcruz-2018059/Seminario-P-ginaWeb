'use strict'

const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String
    }
},{
    versionKey: false,
})

module.exports = mongoose.model('Comment', commentSchema);