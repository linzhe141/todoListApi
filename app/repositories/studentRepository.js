const Student = require('../models/student')
const mysql = require('mysql')
const mysqlOption = require('../config/db') 
const conn = mysql.createConnection(mysqlOption.mysql)
const sqlMap = require('../dao/sqlMap')

class StudentRepository {
    constructor(){
        
    }
    listStuClass(params, callback){
        conn.query(sqlMap.listStuClass, [params.classID], function(err, result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    listStudent(callback){
        conn.query(sqlMap.listStudent,function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    findUsersBy(id) {
        conn.query(sqlMap.studentById, [params.username], function(err, result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    findStudentBy(id,callback){
        conn.query(sqlMap.findStudentBy,[id],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    createStudent(params,callback){
        
        conn.query(sqlMap.createStudent,[params.stuID,params.stuName,
            params.stuAge,params.stuGender,params.classID],function(err,result){
               
                callback(JSON.parse(JSON.stringify(result)))
            }).on('error',function(err){
                console.log('fdsfsa-->',err)
            })
    }
    
    deleteStudent(id,callback) {
        conn.query(sqlMap.deleteStudent,[id],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
}
module.exports = new StudentRepository()