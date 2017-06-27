const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findOneAndRemove({text: 'test'}).then((result) => {
//     console.log(result);
// })

// Todo.findByIdAndRemove('59524d5fcacd888e12b390ea').then((result) => {
//     console.log(result);
// })
