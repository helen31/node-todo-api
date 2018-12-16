/**
 * Created by alena on 09/12/18.
 */
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//delete multiplies records Todo.remove
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5c164ff4c85c117e918ef6e3'}).then((todo) => {
    console.log(todo);
});

//find by id and Remove
// Todo.findByIdAndRemove('5c164ff4c85c117e918ef6e3').then((todo) => {
//     console.log(todo);
// });

