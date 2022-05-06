const mongoose = require('mongoose');
// const { default: validator } = require('validator');

const { errorMessage } = require('../utils/constants');

const taskSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
    },
    description: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    deadline: {
        type: Date,
        default: Date.now,
        required: false,
    },
    rate: {
        type: Number,
        required: false,
    },
    status: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('task', taskSchema);

