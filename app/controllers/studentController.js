const JwtUtil = require('../../jwt')
const studentRepository = require('../repositories/studentRepository')
const formidable = require('formidable')
const fs = require('fs')
exports.studentHomework = function (req, res) {
    var username = req.body.username
    var params = {
        username
    }
    studentRepository.listLoginUsers(params, (result)=>{
        console.log(result[0])
        console.log(result[0].password+'->')
        console.log(params.password+'->')
        console.log(result[0].password == params.password)
        var resdata = {}
        if (result.length == 0){
            resdata.code = 200
            resdata.success = false
            resdata.msg = "用户未注册，请注册"
            res.json(resdata)
        } else {
            if (result[0].password == params.password) {
                var jwt = new JwtUtil(params.username)
                var token = jwt.generateToken()
                console.log('token--->',token)
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

exports.upload = function (req, res) {
    var params = {
        username: req.body.username
    }
    var form = new formidable.IncomingForm()
    form.uploadDir = '/Users/linzhe/Desktop/RESTful/todoListApi/app/stufile/upload'
    console.log(form)
    console.log(1111)
    form.parse(req, function(error, fields, files) {
        console.log('fields', fields)
        for (var key in files) {
            var file = files[key];
            var fName = (new Date()).getTime();
            console.log('----->',file.type)
            switch (file.type) {
                case "image/jpeg":
                    fName = fName + ".jpg";
                    break;
                case "image/png":
                    fName = fName + ".png";
                    break;
                case "application/pdf":
                    fName = fName + ".pdf";
                    break;
                case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                    fName = fName + ".docx";
                    break;
                case "application/msword":
                    fName = fName + ".doc";
                    break;
                default:
                    fName = fName + ".png";
                    break;
            }
            var uploadDir = "/Users/linzhe/Desktop/RESTful/todoListApi/app/stufile/upload/" + fName;
            fs.rename(file.path, uploadDir, function(err) {
                if (err) {
                    res.write(err + "\n");
                    res.end();
                }
                res.json('上传成功')
            })

        }
    });
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