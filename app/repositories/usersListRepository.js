const Users = require('../models/users')
const mysql = require('mysql')
const mysqlOption = require('../config/db') 
const conn = mysql.createConnection(mysqlOption.mysql)
const sqlMap = require('../dao/sqlMap')
let currentId = 0

class UsersListRepository {
    constructor(){
        const users1 = new Users(++currentId, 'users1', 'users1 desc')
        const users2 = new Users(++currentId, 'users2', 'users2 desc')
        users1.isFinished = true
        this.usersList = [users1, users2]
    }
    //查看用户
    listLoginUsers(params, callback){
        conn.query(sqlMap.loginUser, [params.username], function(err, result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    
    //实现查看所有userss的方法
    listAllUsers(callback) {
        console.warn(sqlMap.usersList)
        conn.query(sqlMap.usersList, function (err, result){
            if (err) throw err
            callback(result)
        })
    }   
    //实现通过id查看具体users的方法 
    findUsersBy(params, callback) {
        conn.query(sqlMap.findUserBy,[params],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    //实现创建新users记录的方法
    createUsers(params,callback){
        conn.query(sqlMap.createUsers,[params.username,params.password,params.permissions],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    //实现通过id和一个更新对象来更新users记录的方法
    updateUsers(pwd,id, callback) {
        console.log(pwd,id)
        conn.query(sqlMap.resetPassword, [pwd,id],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    //实现通过id来删除users记录的方法
    deleteUsersBy(id,callback) {
        conn.query(sqlMap.deleteUser,[id],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }

    changePwd(params,callback) {
        console.log(params.password,params.username)
        conn.query(sqlMap.changePwd,[params.password,params.username],function (err,result) {
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
          })
    }
}
module.exports = new UsersListRepository()