const {ObjectID} = require('mongodb');

const {monggoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});


Todo.findOneAndRemove({
    _id: '5c42d29fbe9c3407f4b57869'
}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5c42d29fbe9c3407f4b57869').then((todo) => {
    console.log(todo);
});
