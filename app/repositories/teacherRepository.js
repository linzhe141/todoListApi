const Teacher = require('../models/teacher')
const mysql = require('mysql')
const mysqlOption = require('../config/db') 
const conn = mysql.createConnection(mysqlOption.mysql)
const sqlMap = require('../dao/sqlMap')

class TeacherRepository {
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
    teacherClassOptions(params,callback){
        conn.query(sqlMap.teacherClassinfo, [params.username], function(err, result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    //实现创建新users记录的方法
    createUsers(usersBody){

    }
    //实现通过id和一个更新对象来更新users记录的方法
    updateUsers(id, upate) {

    }
    //实现通过id来删除users记录的方法
    deleteUsersBy(id) {

    }
}
module.exports = new TeacherRepository()