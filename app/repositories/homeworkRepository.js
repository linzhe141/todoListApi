const Homework = require('../models/homework')
const mysql = require('mysql')
const mysqlOption = require('../config/db') 
const conn = mysql.createConnection(mysqlOption.mysql)
const sqlMap = require('../dao/sqlMap')

class HomeworkRepository {
    constructor(){
        
    }
    
    listHomework(params, callback){
        conn.query(sqlMap.loginUser, [params.username], function(err, result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    listHomeworkClass(params, callback){
        conn.query(sqlMap.listhomeworClass, [params.tchID,params.classID], function(err, result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    //实现通过stuid查看具体作业的方法 
    findHomeworkSpecBy(params, callback) {
        conn.query(sqlMap.homeworkSpec, [params.hwID], function(err, result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    //实现创建新users记录的方法
    createHomework(params,callback){
        conn.query(sqlMap.createHomework, [params.courseID,params.hwName,params.hwDesc,
            params.hwContent,params.startDate,params.endDate,params.hwFile] ,function(err, result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }

    hwIDmax(callback){
        conn.query(sqlMap.getMaxHwID,function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }

    //实现通过id和一个更新对象来更新users记录的方法
    updateHomework(params, callback) {
        conn.query(sqlMap.updateHomework,[params.endDate,params.hwID],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    //实现通过id来删除users记录的方法
    deleteHomeWorkBy(params,callback) {
        conn.query(sqlMap.deleteHomeWorkBy,[params.hwID],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
}
module.exports = new HomeworkRepository()