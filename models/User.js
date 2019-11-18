const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const User = new Schema({
    email: String,
    password: String,
});
const MyModel = mongoose.model('User', User);

module.exports = MyModel;