const todoListRepository = require('../repositories/todoListRepository')

exports.listAllTodos = function (req, res) {
    console.log('function', todoListRepository.listAllTodos)
    todoListRepository.listAllTodos((result)=>{
        console.log(result)
        res.json(result)
        return result
    })
    
    
}
exports.createTodo = function(req, res) {
    todoListRepository.createTodo(req.body)
    res.status(201).end()
}
exports.readTodo = function(req, res) {
    const todo = todoListRepository.findTodoBy(req.params.todoID)
    console.log(todo)
    res.json(todo)
}
exports.updateTodo = function(req, res) {
    const todo = todoListRepository.updateTodo(req.params.todoID,req.body)
    res.json(todo)
}
exports.deleteTodo = function(req, res) {
    todoListRepository.deleteTodoBy(req.params.todoID)
    res.json({
        message: 'Todo successfully deleted'
    })
}