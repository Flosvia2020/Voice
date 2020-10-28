var mongoose = require('mongoose')
var Schema = mongoose.Schema

var commentSchema = new Schema({
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

postSchema.statics.create = function(id, name, title, body) {
    const post = new this({
        id,
        name,
        title,
        body
    })
    
    return post.save()
}

postSchema.statics.addComment = function(i, name, body) {
    return this.findOneAndUpdate({id: i}, {
        $push: {
            comments: {
                name,
                body
            }
        }
    })
}

module.exports = mongoose.model("post", postSchema)