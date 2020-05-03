const formatter = require('../../tools')
const scoreRepository = require('../repositories/scoreRepository')
var fs = require('fs')
var fileUrl = '/Users/linzhe/Desktop/RESTful/todoListApi/app/teacherfile/upload'
// 查看全部作业信息
exports.findStuHomeworkBy = function (req, res) {
    var username = req.body.username
    scoreRepository.findStuHomeworkBy(username, (result) => {
        console.log(result)
        var resdata = {}
        if (result.length == 0) {
            resdata.code = 200
            resdata.success = false
            resdata.msg = "当前暂未布置祖业"
            res.json(resdata)
        } else {
            resdata.code = 200
            resdata.success = true
            resdata.data = {}
            var resultData = []
            result.forEach(item => {
                resdata.data[formatter(item.courseName)] = []
                result.forEach((ele) => {
                    if (item.courseName == ele.courseName) {
                        resdata.data[formatter(item.courseName)].push({
                            hwID: ele.hwID,
                            hwName: ele.hwName,
                            endTime: ele.endDate
                        })
                    }
                })
            })
            console.log(resdata.data.Chinese)
            res.json(resdata)
        }
    })
}
// 查看具体作业信息
exports.StuHomeworkSpec = function (req, res) {
    //console.log('req --> 具体作业', req)
    var params = {
        hwID: req.query.hwID,
        stuID: req.query.stuID
    }
    scoreRepository.specStuHomework(params, (result) => {
        console.log(result)
        var resdata = {}
        resdata.code = 200
        resdata.success = true
        resdata.data = result
        res.json(resdata)

    })
}
exports.uploadScoreResultFile = function(req,res){
    var imgData = req.body.imgData
    console.log(req.body)
    var base64Data = imgData.replace(/^(data:image\/png\;base64,)/,'')
    var dataBuffer = new Buffer(base64Data,'base64')
    fs.writeFile(fileUrl+'/'+req.body.hwID+'+'+req.body.stuID+'.png',dataBuffer,function(err){
        if(err){
            throw err
        }
    })
    var params = {
        resultFilename: req.body.hwID+'+'+req.body.stuID+'.png',
        hwID: req.body.hwID,
        stuID: req.body.stuID
    }
    scoreRepository.updateScoreResultFile(params,(result)=>{
        if(result){
            var resdata = {}
            resdata.code = 200
            resdata.success = true
            resdata.msg = "成功"
            res.json(resdata)
        }
    })
}