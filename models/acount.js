var mongoose = require('mongoose')
var Schema = mongoose.Schema
const crypto = require('crypto')
const config = require('../config')

var acountSchema = new Schema({
    id: String,
    password: String,
    nickname: String
})

acountSchema.statics.create = function(id, password, nickname) {
    const encrypted = crypto.createHmac('sha1', config.secret)
                        .update(password)
                        .digest('base64')

    const acount = new this({
        id,
        password: encrypted,
        nickname
    })

    return acount.save()
}

acountSchema.statics.findOneByUsername = function(id) {
    return this.findOne({
        id
    }).exec()
}

acountSchema.methods.verify = function(password) {
    const encrypted = crypto.createHmac('sha1', config.secret)
                        .update(password)
                        .digest('base64')
                        
    return this.password === encrypted
}

acountSchema.methods.assignAdmin = function() {
    this.admin = true
    return this.save()
}

module.exports = mongoose.model('acount', acountSchema)