const Homework = require('../models/homework')
const mysql = require('mysql')
const mysqlOption = require('../config/db') 
const conn = mysql.createConnection(mysqlOption.mysql)
const sqlMap = require('../dao/sqlMap')

class HomeworkRepository {
    constructor(){
        
    }
    //查看作业列表
    listHomework(params, callback){
        conn.query(sqlMap.loginUser, [params.username], function(err, result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    
    //实现通过stuid查看具体作业的方法 
    findUsersBy(id) {
        conn.query(sqlMap.homeworkStu, [params.username], function(err, result){
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
module.exports = new HomeworkRepository()