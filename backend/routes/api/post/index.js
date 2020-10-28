const router = require('express').Router()
const controller = require('./post.contoller')
const postMiddleware =  require('../../../middlewares/post')

router.use('/upload', postMiddleware)
router.post('/upload', controller.upload)

router.get('/list', controller.lists)
router.get('/list/:id', controller.list)

router.put('/alter', controller.alter)

router.delete('/erase', controller.erase)

router.post('/addComment', postMiddleware)
router.post('/addComment', controller.addComment)

module.exports = router