const formatter = require('../../tools')
const classgradeRepository = require('../repositories/classgradeRepository')


exports.listClassgrade = function(req, res) {
    classgradeRepository.listClassgrade(result=>{
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = result
            res.json(resdata)
        }
    })
   
}
exports.readClassgrade = function(req, res) {
    classgradeRepository.readClassgrade(req.params.classID,result=>{
        var resdata = {}
        if (result.length != 0) {
            resdata.code = 200
            resdata.success = true
            resdata.data = result
            res.json(resdata)
        }
    })
   
}