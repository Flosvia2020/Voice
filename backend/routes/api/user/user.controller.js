const acount = require('../../../models/acount')

exports.list = (req, res) => {
    if(!req.decoded.admin) {
        return res.status(403).json({
            message: 'you are not an admin'
        })
    }

    acount.find({})
    .then(
        users => {
            res.json({users})
        }
    )
}

exports.assignAdmin = (req, res) => {
    if(!req.decoded.admin) {
        return res.status(403).json({
            message: 'you are not an admin'
        })
    }

    acount.findOneByUsername(req.params.id)
    .then(
        user => user.assignAdmin
    ).then(
        res.json({
            success: true
        })
    )
}