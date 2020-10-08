var mongoose = require('mongoose')
var Schema = mongoose.Schema

var commentSchema = new Schema({
    Id: Number,
    name: String,
    body: String,
    order: Number,
    commentDate: {
        type: Date,
        default: Date.now
    }
})

var postSchema = new Schema({
    id: Number,
    name: String,
    title: String,
    body: String,
    postDate: {
        type: Date,
        default: Date.now
    },
    comments: [commentSchema]
})

module.exports = mongoose.model("post", postSchema)