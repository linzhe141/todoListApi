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
        console.log('callback', callback)
        console.warn(sqlMap.usersList)
        conn.query(sqlMap.usersList, function (err, result){
            if (err) throw err
            //typeof result
            callback(result)
        })
    }   
    //实现通过id查看具体users的方法 
    findUsersBy(id) {
        //console.log('findUsersByID',this.listAllUserss())
        // return this.listAllUserss().filter(item=>{
        //     return item.id == id
        // })
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
module.exports = new UsersListRepository()