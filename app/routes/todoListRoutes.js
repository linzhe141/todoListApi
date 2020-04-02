module.exports = function(app){
    const todoList = require('../controllers/todoListController')
    app.route('/todos')
        .get(todoList.listAllTodos)
        .post(todoList.createTodo)

    app.route('/todos/:todoID')
        .get(todoList.readTodo)
        .put(todoList.updateTodo)
        .delete(todoList.deleteTodo)
}