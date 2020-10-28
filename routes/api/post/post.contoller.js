const post = require('../../../models/post')

exports.upload = (req, res) => {
    const { title, body } = req.body
    
    post.count({}).exec()
    .then(count => {
        post.create(count+1, req.name, title, body)
    })
    .then(() => {
        res.json({
            success: true
        })
    })
    .catch((err) => {
        res.status(403).json({
            success: false,
            message: err.message
        })
    })
}

exports.addComment = (req, res) => {
    const { postId, body } = req.body 

    post.addComment(postId, req.name, body)
    .then(() => {
        res.json({
            success: true
        })
    })
    .catch((err) => {
        res.status(403).json({
            success: false,
            message: err.message
        })
    })
}

exports.lists = (req, res) => {
    post.find({})
    .then(posts => {
        res.json(posts)
    })
}

exports.list = (req, res) => {
    post.find({})
    .then(posts => {
        console.log(posts)
        res.json(posts[(Number(req.params.id) - 1)])
    })
}

exports.alter = (req, res) => {
    const { postId, title, body } = req.body

    post.findByIdAndUpdate({ id: postId }, {
        title,
        body
    })
    .then(() => {
        res.json({
            success: true
        })
    })
    .catch(err => {
        res.status(403).json({
            success: false,
            message: err.message
        })
    })
}

exports.erase = (req, res) => {
    res.json({
        type: "upload"
    })
}