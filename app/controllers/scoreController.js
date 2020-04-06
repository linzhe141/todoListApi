const formatter = require('../../tools')
const scoreRepository = require('../repositories/scoreRepository')

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
                    console.log("-->"+ele.hwName)
                    if (item.courseName == ele.courseName) {
                        resdata.data[formatter(item.courseName)].push({
                            hwName: ele.hwName
                        })
                    }
                })
            })
            console.log(resdata)
            res.json(resdata)
        }
    })
}

