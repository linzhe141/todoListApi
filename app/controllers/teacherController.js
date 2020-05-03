const JwtUtil = require('../../jwt')
const teacherRepository = require('../repositories/teacherRepository')
const homeworkRepository = require('../repositories/homeworkRepository')
const homeworkClassReopsitory = require('../repositories/homeworkClassReopsitory')
const formidable = require('formidable')
const studentRepository = require('../repositories/studentRepository')
const scoreRepository = require('../repositories/scoreRepository')
const fs = require('fs')
var fileUrl = '/Users/linzhe/Desktop/RESTful/todoListApi/app/teacherfile/upload'
exports.teacherInfo = function (req, res) {
    // get请求 req.query 中
    // post 请求 req.body 中

    var username = req.query.username
    console.log("username-->", username)
    var params = {
        username
    }
    teacherRepository.teacherInfo(params, (result) => {
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = result[0]
            res.json(resdata)
        }
    })


}

exports.createHomework = function (req, res) {
    var form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
        console.log('files-->', files)
        let config = ['courseID', 'hwName', 'hwDesc',
            'hwContent', 'startDate', 'endDate', 'hwFile'
        ]

        let keyArr = []
        for (key in fields) {
            keyArr.push(key)
        }
        console.log(keyArr)
        var params = {}
        config.forEach(item => {
            if (keyArr.indexOf(item) != -1) {
                params[item] = fields[item]
            } else {
                params[item] = '空'
            }
        })
        if (files.file) {
            var file = files.file;
            // 时间  作业名  文件
            var fName = (new Date()).getTime() + '+' + fields.hwName + "+" + file.name;
            var uploadDir = "/Users/linzhe/Desktop/RESTful/todoListApi/app/teacherfile/upload/" + fName;
            params.hwFile = fName
            fs.rename(file.path, uploadDir, function (err) {
                if (err) {
                    res.write(err + "\n");
                    res.end();
                }

            })
        }
        homeworkRepository.createHomework(params, function (result) {
            homeworkClassReopsitory.createHwClass({
                classID: fields.classID
            }, function (result) {
                studentRepository.listStuClass({
                    classID: fields.classID
                }, function (result) {
                    console.log('params--->', params)
                    result.forEach((item) => {
                        homeworkRepository.hwIDmax(function (result) {
                            scoreRepository.createScore({
                                hwID: result[0]['max(hwID)'],
                                stuID: item.stuID
                            }, function (result) {
                            })
                        })

                    })
                    var resdata = {}
                    resdata.code = 200
                    resdata.success = true
                    resdata.msg = '作业创建成功'
                    res.json(resdata)
                })
            })
        })
    })

}

exports.teacherClassOptions = function (req, res) {
    var params = {
        username: req.body.username
    }
    teacherRepository.teacherClassOptions(params, (result) => {
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = result.map(item => {
                return {
                    value: item.classID,
                    label: item.className
                }
            })
            res.json(resdata)
        }

    })

}

exports.HomeworkSpec = function (req, res) {
    var hwID = req.query.hwID
    var params = {
        hwID
    }
    homeworkRepository.findHomeworkSpecBy(params, (result) => {
        console.log(result)
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = result
            res.json(resdata)
        }
    })

}
exports.listHomeworClass = function (req, res) {
    var classID = req.query.classID
    var tchID = req.query.tchID
    var params = {
        tchID,
        classID,
    }
    homeworkRepository.listHomeworkClass(params, (result) => {
        console.log(result)
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = result
            res.json(resdata)
        }
    })

}
exports.deleteHomework = function (req, res) {
    var hwID = req.body.hwID
    console.log('classID--->', hwID)
    var params = {
        hwID
    }
    homeworkRepository.deleteHomeWorkBy(params, (result) => {
        homeworkClassReopsitory.deleteHwClassBy(params, (result) => {
            console.log(result)
            var resdata = {}
            if (result.length != 0) {
                resdata.code = 200
                resdata.success = true
                resdata.msg = "删除成功！"
                res.json(resdata)
            }
        })
    })

}
exports.listHwComplet = function (req, res) {
    var hwID = req.query.hwID
    var params = {
        hwID
    }
    homeworkClassReopsitory.listHwComplet(params, (result) => {
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = result
            res.json(resdata)
        }
    })

}
exports.download = function (req, res) {
    var filename = req.body.filename;
    var file = fileUrl + '/' + filename;
    res.writeHead(200, {
        'Content-Type': 'application/octet-stream', //告诉浏览器这是一个二进制文件
        'Content-Disposition': 'attachment; filename=' + encodeURI(filename), //告诉浏览器这是一个需要下载的文件
    }); //设置响应头
    var readStream = fs.createReadStream(file); //得到文件输入流
    readStream.on('data', (chunk) => {
        res.write(chunk, 'binary'); //文档内容以二进制的格式写到response的输出流
    });
    readStream.on('end', () => {
        res.end();
    })
}
exports.updateScore = function(req,res){
    console.log(req.body)
    var params = {
        hwID: req.body.hwID,
        stuID: req.body.stuID,
        state: req.body.state,
        score: req.body.score,
        comments: req.body.comments,
        resultFile: req.body.resultFile
    }
    scoreRepository.updateScore(params,(result)=>{
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.msg = '跟新成功！'
            res.json(resdata)
        }
    })
}

exports.updateHomework = function(req,res){
    var params = {
        hwID: req.body.hwID,
        endDate: req.body.endDate
    }
    homeworkRepository.updateHomework(params,(result)=>{
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.msg = '跟新成功！'
            res.json(resdata)
        }
    })
}