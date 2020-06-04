const Classgrade = require('../models/classgrade')
const mysql = require('mysql')
const mysqlOption = require('../config/db') 
const conn = mysql.createConnection(mysqlOption.mysql)
const sqlMap = require('../dao/sqlMap')

class HomeworkClassReopsitory {
    constructor(){
        
    }
  
    teacherInfo(params, callback) {
        conn.query(sqlMap.teacherInfo, [params.username], function(err, result){
            if(err) throw err
            console.log('具体教师信息-->',result)
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
  
    createHwClass(params,callback){
        conn.query(sqlMap.createHwClass,[params.classID],function(err,result){
            if(err) throw err
            callback(JSON.parse(JSON.stringify(result)))
        })
    }
    
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