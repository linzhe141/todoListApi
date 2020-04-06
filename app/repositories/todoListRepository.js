const Todo = require('../models/todo')
const mysql = require('mysql')
const mysqlOption = require('../config/db') 
const conn = mysql.createConnection(mysqlOption.mysql)
const sqlMap = require('../dao/sqlMap')
let currentId = 0

class TodoListRepository {
    constructor(){
        const todo1 = new Todo(++currentId, 'todo1', 'todo1 desc')
        const todo2 = new Todo(++currentId, 'todo2', 'todo2 desc')
        todo1.isFinished = true
        this.todoList = [todo1, todo2]
    }
    //实现查看所有todos的方法
    listAllTodos(params,callback) {
        console.log('callback', callback)
        conn.query(sqlMap.list, function (err, result){
            if (err) throw err
            //typeof result
            callback(result)
        })
    }   
    //实现通过id查看具体todo的方法 
    findTodoBy(id) {
        //console.log('findTodoByID',this.listAllTodos())
        // return this.listAllTodos().filter(item=>{
        //     return item.id == id
        // })
    }
    //实现创建新todo记录的方法
    createTodo(todoBody){

    }
    //实现通过id和一个更新对象来更新todo记录的方法
    updateTodo(id, upate) {

    }
    //实现通过id来删除todo记录的方法
    deleteTodoBy(id) {

    }
}
module.exports = new TodoListRepository()