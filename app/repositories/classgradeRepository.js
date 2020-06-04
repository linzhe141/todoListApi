const Classgrade = require('../models/classgrade')
const mysql = require('mysql')
const mysqlOption = require('../config/db') 
const conn = mysql.createConnection(mysqlOption.mysql)
const sqlMap = require('../dao/sqlMap')

class ClassgradeRepository {
    constructor(){
        
    }
    //查看teacher列表
    listTeacher(params, callback){
        
    }
    
    //实现通过教工号查看具体教师的方法 
    teacherInfo(params, callback) {
        conn.query(sqlMap.teacherInfo, [params.username], function(err, result){
            if(err) throw err
            console.log('具体教师信息-->',result)
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    listClassgrade(callback){
        conn.query(sqlMap.classgradeList,function (err,result) { 
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    readClassgrade(params,callback){
        conn.query(sqlMap.findClassgradeBy,[params],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
   
    createUsers(usersBody){

    }
    
    updateUsers(id, upate) {

    }
   
    deleteUsersBy(id) {

    }
}
module.exports = new ClassgradeRepository()