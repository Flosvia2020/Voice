const jwt = require('jsonwebtoken')
const acount = require('../models/acount')

const authMiddleware = (req, res, next) => {
    const token = req.headers['access-token'] || req.query.token
    const refreshToken = req.headers['refresh-token'] || req.query.refreshToken
    const secret = req.app.get('jwt-secret')

    if(!token && !refreshToken) {
        return res.status(403).json({
            success: false,
            message: '로그인을 하십시오.'
        })
    }

    const middle = user => {
        let p
        if(user) {
            if(token) {
                p = new Promise(
                    (resolve, reject) => {
                        if(token) {
                            jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                                if(err) reject(err)
                                resolve(decoded)
                            })
                            req.type = 'decoded'
                        }
                    }
                )
        
                return p 
            }
            const dateNow = new Date()
            const date = new Date(user.expired_at)
            const minus = date.getTime() - dateNow.getTime()
            if(minus <= 0) {
                throw new Error('expired')
            }
            p = new Promise((resolve, reject) => {
                jwt.sign(
                {
                    _id: user._id,
                    id: user.id,
                    admin: user.admin
                },
                secret,
                {
                    expiresIn: '7d',
                    issuer: 'voice.com',
                    subject: 'userInfo'
                }, (err, token) => {
                    if(err) reject(err)
                    resolve(token)
                })
            })
            req.type = 'token'

            return p
        }
    }

    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message
        })
    }

    acount.findOneByRefresh(refreshToken)
        .then(middle)
        .then(decoded => {
            req.decoded = decoded
            next()
        }).catch(onError)
}

module.exports = authMiddleware