const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModule('user')

Router.get('/list', function (req, res) {
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
})
Router.post('/register', function (req, res) {
    console.log('req.body', req.body)
    const { user, pwd, type } = req.body
    User.findOne({ user }, function (err, doc) {
        if (err) {
            return
            // TODO ERR
        }
        if (doc) {
            return res.json({ code: 1, msg: '用户名重复' })
        }
        User.create({ user, pwd, type }, function (e, d) {
            if (e) {
                return res.json({ code: 1, msg: 'server error' })
            }
            return res.json({ code: 0 })
        })
    })
})
Router.get('/info', function (req, res) {
    // check cookie
    return res.json({
        code: 1
    })
})

module.exports = Router