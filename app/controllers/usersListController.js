const JwtUtil = require('../../jwt')
const usersListRepository = require('../repositories/usersListRepository')

exports.loginUsers = function (req, res) {
    //var token = req.headers.token
    var username = req.body.username
    var password = req.body.password
    var params = {
        username,
        password
    }
    usersListRepository.listLoginUsers(params, (result)=>{
        var resdata = {}
        if (result.length == 0){
            resdata.code = 200
            resdata.success = false
            resdata.msg = "用户账号出错"
            res.json(resdata)
        } else {
            if (result[0].password == params.password) {
                //发送token
                var jwt = new JwtUtil(params.username)
                var token = jwt.generateToken()
                resdata.code = 200
                resdata.success = true
                resdata.token = token
                resdata.msg = "登录成功"
                res.json(resdata)
            } else {
                resdata.code = 200
                resdata.success = false
                resdata.msg = "账号或密码不正确"
                res.json(resdata)
            }
        }
    })
    
    
}

exports.listAllUsers = function (req, res) {
    usersListRepository.listAllUsers((result)=>{
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = result
            res.json(resdata)
        }
    })
}

exports.readUsers = function(req, res) {
    usersListRepository.findUsersBy(req.params.usersID,(result)=>{
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = result
            res.json(resdata)
        }
    })
}
exports.updateUsers = function(req, res) {
    usersListRepository.updateUsers(req.params.usersID,req.params.usersID,(result)=>{
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = '重置密码成功'
            res.json(resdata)
        }
    })
    
    //res.json(users)
}
exports.deleteUsers = function(req, res) {
    usersListRepository.deleteUsersBy(req.params.usersID,result=>{
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = '成功删除用户'
            res.json(resdata)
        }
    })
   
}

exports.changePwd = function(req, res) {
    var params = {
        username: req.params.userID,
        password: req.body.password
    }
    console.log(params)
    usersListRepository.changePwd(params,result=>{
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = '密码重置成功'
            res.json(resdata)
        }
    })
   
}