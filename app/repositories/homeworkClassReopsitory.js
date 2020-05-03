const Classgrade = require('../models/classgrade')
const mysql = require('mysql')
const mysqlOption = require('../config/db') 
const conn = mysql.createConnection(mysqlOption.mysql)
const sqlMap = require('../dao/sqlMap')

class HomeworkClassReopsitory {
    constructor(){
        
    }
    //实现通过教工号查看具体教师的方法 
    teacherInfo(params, callback) {
        conn.query(sqlMap.teacherInfo, [params.username], function(err, result){
            if(err) throw err
            console.log('具体教师信息-->',result)
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    //实现创建新users记录的方法
    createHwClass(params,callback){
        conn.query(sqlMap.createHwClass,[params.classID],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    // 学生作业完成情况列表
    listHwComplet(params,callback){
        console.log('fdsafsafas--->hwID',params.hwID)
        conn.query(sqlMap.listhwComplet,[params.hwID],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    deleteHwClassBy(params,callback) {
        conn.query(sqlMap.deleteHwClassBy,[params.hwID],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
}
module.exports = new HomeworkClassReopsitory()