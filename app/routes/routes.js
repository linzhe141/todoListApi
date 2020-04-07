module.exports = function(app){
    const usersList = require('../controllers/usersListController')
    const score = require('../controllers/scoreController')
    const student = require('../controllers/studentController')
    app.route('/login')
        .post(usersList.loginUsers)

    app.route('/stuHomework')
        .post(score.findStuHomeworkBy)

    app.route('/upload')
        .post(student.upload)

    app.route('/users')
        .get(usersList.listAllUsers)
        .post(usersList.createUsers)

    app.route('/users/:usersID')
        .get(usersList.readUsers)
        .put(usersList.updateUsers)
        .delete(usersList.deleteUsers)
}