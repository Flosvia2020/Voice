const jwt = require('jsonwebtoken')
const acount = require('../models/acount')
const post = require('../models/post')

const postMiddleware = (req, res, next) => {
    const token = req.headers['access-token'] || req.query.token
    const p = new Promise ((resolve, reject) => {
        jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
            if(err) reject(err)
            resolve(decoded)
        })
    })

    p
    .then(info => {
        return acount.findOneByUsername(info.id)
    }).then(user => {
        req.name = user.nickname
        next()
    })
    .catch(err => {
        res.status(403).json({
            message: err.message
        })
    })
}

module.exports = postMiddleware