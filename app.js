const fs = require('fs');
const path = require('path');
const express = require('express');
const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/todomvcdb')

mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const Todo = require('./models/todos');

const app = express();

app.use('/static', express.static('static'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
})

// put routes here


app.get('/api/todos', async(request,response)=>{
var todo = await Todo.find();
        return response.json(todo);

        // var todo = await database.collection('Todo').find({}).toArray();
        //     response.render('/static/index.html', {'todo':todo});
        //     database.close();
        // });
    });
// var id = 0
app.post('/api/todos', (request, response) => {
    // var todo = await Todo.create({ id:id++})
    
    let title = request.body;
    // console.log(title);
    // let id = +1;
    // title.push[id];
    // console.log(title);
    console.log(request.body);
    // let todo = new Todo(request.body)
    //     todo.save(function(err, newItem){
    //         console.log(newItem);
    //         response.json(newItem);
    //     })
    Todo.create(request.body, function(err, todoItem){
        console.log(todoItem);
    })

});

app.get('/api/todos/:id', (request, response) => {
    let id = request.params.id;
    let todo = todos.find(todo => todo.id === id)
});
app.put('/api/todos/:id', (request, response) => {
});
app.patch('/api/todos/:id', (request, response) => {
});
app.delete('/api/todos/:id', (request, response) => {
    Todo.findByIdAndRemove(request.params.id, function(error, deletedTodo){
        response.send(deletedTodo);
    })
});
app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});
