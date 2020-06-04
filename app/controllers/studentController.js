const JwtUtil = require('../../jwt')
const studentRepository = require('../repositories/studentRepository')
const scoreRepository = require('../repositories/scoreRepository')
const usersListRepository =require('../repositories/usersListRepository')
const formidable = require('formidable')
const fs = require('fs')
// var fileUrl = '/Users/linzhe/Desktop/RESTful/todoListApi/app/stufile/upload'
var fileUrl = 'C:\\Users\\linzh\\Desktop\\todoListApi\\app\\stufile\\upload'
var fileUrlTeacher = 'C:\\Users\\linzh\\Desktop\\todoListApi\\app\\teacherfile\\upload'
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
    var form = new formidable.IncomingForm()
    form.uploadDir = fileUrl
    form.parse(req, function(error, fields, files) {
        console.log('fields-->',files)
        for (var key in files) {
            var file = files[key];
            // 时间  学号  文件
            var fName = (new Date()).getTime() + '+'+fields.username +file.name;
            console.log(fName)
            var uploadDir = 'C:\\Users\\linzh\\Desktop\\todoListApi\\app\\stufile\\upload\\' + fName;
            fs.rename(file.path, uploadDir, function(err) {
                if (err) {
                    res.write(err + "\n");
                    res.end();
                }
                var params = {
                    fileInfo: fName,
                    hwID: fields.hwID,
                    stuID: fields.username
                }
                scoreRepository.updateScoreFile(params)
            })

        }
    });
}
exports.download = function (req, res) {
    var filename = req.body.filename;
    var file = fileUrl + '/' + filename;
    res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename=' + encodeURI(filename),
    });
    var readStream = fs.createReadStream(file);
    readStream.on('data', (chunk) => {
        res.write(chunk, 'binary');
    });
    readStream.on('end', () => {
        res.end();
    })
}
exports.downloadResultFile = function (req, res) {
    var filename = req.body.filename;
    var file = fileUrlTeacher + '/' + filename;
    res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename=' + encodeURI(filename),
    });
    var readStream = fs.createReadStream(file);
    readStream.on('data', (chunk) => {
        res.write(chunk, 'binary');
    });
    readStream.on('end', () => {
        res.end();
    })
}

exports.listStudent = function (req, res) {
    studentRepository.listStudent((result)=>{
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = result
            res.json(resdata)
        }
    })
    
    
}
exports.addStudent = function(req, res) {
    studentRepository.createStudent(req.body, (result) => {
        var params = {
            username: req.body.stuID,
            password: req.body.stuID,
            permissions: 2
        }
        usersListRepository.createUsers(params,(result)=>{
            var resdata = {}
            resdata.code = 200
            resdata.success = true
            resdata.msg = '学生创建成功'
            res.json(resdata)
        })
        
    })
}
exports.readStudent = function(req, res) {
    studentRepository.findStudentBy(req.params.stuID,(result)=>{
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = result
            res.json(resdata)
        }
    })
}

exports.deleteStudent = function(req, res) {
    studentRepository.deleteStudent(req.params.stuID,result=>{
        console.log(result)
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = '成功删除用户'
            res.json(resdata)
        }
    })
}