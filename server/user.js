const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModule('user')
const utility = require('utility')
const _filter = {
    'pwd': 0,
    '__v': 0
}

Router.get('/list', function (req, res) {
    const {
        type
    } = req.query
    // User.remove({},()=>{})
    const queryObj = type ? {
        type
    } : {}
    User.find(queryObj, function (err, doc) {
        return res.json({
            code: 0,
            data: doc
        })
    })
})
Router.post('/update', function (req, res) {
    const {
        userid
    } = req.cookies
    if (!userid) {
        return res.dumps({
            code: 1
        })
    }
    const {
        body
    } = req
    User.findByIdAndUpdate(userid, body, function (err, doc) {
        if (err) {
            return
            // TODO ERR
        }
        const data = Object.assign({}, {
            user: doc.user,
            type: doc.type
        }, body)
        return res.json({
            code: 0,
            data
        })
    })
})
Router.post('/login', function (req, res) {
    const {
        user,
        pwd
    } = req.body
    console.log('in now')
    User.findOne({
        user,
        pwd: _pwdMd5(pwd)
    }, _filter, function (err, doc) {
        if (err) {
            return
            // TODO ERR
        }
        if (!doc) {
            return res.json({
                code: 1,
                msg: '用户名不存在或密码错误'
            })
        }
        if (doc) {
            res.cookie('userid', doc._id)
            return res.json({
                code: 0,
                data: doc
            })
        }
    })
})
Router.post('/register', function (req, res) {
    console.log('req.body', req.body)
    const {
        user,
        pwd,
        type
    } = req.body
    User.findOne({
        user
    }, function (err, doc) {
        if (err) {
            return
            // TODO ERR
        }
        if (doc) {
            return res.json({
                code: 1,
                msg: '用户名重复'
            })
        }
        const userModel = new User({
            user,
            type,
            pwd: _pwdMd5(pwd)
        })
        userModel.save(function (e, d) {
            if (e) {
                return res.json({
                    code: 1,
                    msg: 'Server error'
                })
            }
            const {
                user,
                type,
                _id
            } = d
            res.cookie('userid', _id)
            res.json({
                code: 0,
                data: {
                    user,
                    type,
                    _id
                }
            })
        })
        // User.create({ user, pwd: _pwdMd5(pwd), type }, function (e, d) {
        //     if (e) {
        //         return res.json({ code: 1, msg: 'Server error' })
        //     }
        //     return res.json({ code: 0 })
        // })
    })
})
Router.get('/info', function (req, res) {
    // check cookies
    const {
        userid
    } = req.cookies
    if (!userid) {
        return res.json({
            code: 1
        })
    } else {
        User.findOne({
            _id: userid
        }, _filter, function (err, doc) {
            if (err) {
                return res.json({
                    code: 1,
                    msg: 'Server error'
                })
            }
            if (doc) {
                return res.json({
                    code: 0,
                    data: doc
                })
            }
        })
    }
})

function _pwdMd5(pwd) {
    pwd += 'addMd5ForSecurity'
    return utility.md5(utility.md5(pwd))
}

module.exports = Router