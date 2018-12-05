/**
 * Created by alena on 21/11/18.
 */
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//config our middleware (app.use() takes a middleware)
app.use(bodyParser.json());

//create a new resource which comes from user, and we use a body
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
   console.log(req.body);
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};