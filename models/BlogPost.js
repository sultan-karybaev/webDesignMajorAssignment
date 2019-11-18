const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BlogPost = new Schema({
    //author: ObjectId,
    title: String,
    body: String,
    image: String
});
const MyModel = mongoose.model('BlogPost', BlogPost);

module.exports = MyModel;