var mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})

// var newTodo = new Todo({
//     text: 'Buy more beer'
// })
//
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo', e)
// })

//user

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
})

var newUser = new User({
    email: 'test@example.com'
})

newUser.save().then((doc) => {
    console.log('Saved user', doc)
}, (e) => {
    console.log('Unable to save user', e)
})
