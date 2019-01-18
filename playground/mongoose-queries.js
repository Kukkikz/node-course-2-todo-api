const {ObjectID} = require('mongodb');

const {monggoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c41cf3fbadbbe3a0062dccb';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     if(todos.length == 0) {
//         return console.log('Id not found');
//     }
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '5c3b1596df51203ea0205e60';

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('user not found');
    }
    console.log('User', user);
}, (e) => console.log(e));