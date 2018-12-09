/**
 * Created by alena on 09/12/18.
 */
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c07f66dcb0ebc6de1ac8ef11';
//
// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('id is not found!');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('5bfedbd069ad337b7347c689').then((user) => {
    if(!user) {
        return console.log('user not found!');
    }
    console.log('User', user);
}).catch((e) => {
    console.log(e);
});