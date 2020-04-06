const usersListRepository = require('../repositories/usersListRepository')

exports.loginUsers = function (req, res) {
    var username = req.body.username
    var password = req.body.password
    var params = {
        username,
        password
    }
    usersListRepository.listLoginUsers(params, (result)=>{
        /* console.log(result[0])
        console.log(result[0].password+'->')
        console.log(params.password+'->')
        console.log(result[0].password == params.password) */
        var resdata = {}
        if (result.length == 0){
            resdata.code = 200
            resdata.success = false
            resdata.msg = "用户未注册，请注册"
            res.json(resdata)
        } else {
            if (result[0].password == params.password) {
                resdata.code = 200
                resdata.success = true
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
    console.log('function', usersListRepository.listAllUsers)
    usersListRepository.listAllUsers((result)=>{
        console.log(result)
        res.json(result)
        return result
    })
    
    
}
exports.createUsers = function(req, res) {
    usersListRepository.createUsers(req.body)
    res.status(201).end()
}
exports.readUsers = function(req, res) {
    const users = usersListRepository.findUsersBy(req.params.usersID)
    console.log(users)
    res.json(users)
}
exports.updateUsers = function(req, res) {
    const users = usersListRepository.updateUsers(req.params.usersID,req.body)
    res.json(users)
}
exports.deleteUsers = function(req, res) {
    usersListRepository.deleteUsersBy(req.params.usersID)
    res.json({
        message: 'Users successfully deleted'
    })
}