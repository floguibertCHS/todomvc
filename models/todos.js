const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    order: { type: Number, required: true, unique:true },
    completed: { type: Boolean, default: false }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;