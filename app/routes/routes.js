module.exports = function(app){
    const usersList = require('../controllers/usersListController')
    const score = require('../controllers/scoreController')
    app.route('/login')
        .post(usersList.loginUsers)

    app.route('/home')
        .post(score.findStuHomeworkBy)

    app.route('/users')
        .get(usersList.listAllUsers)
        .post(usersList.createUsers)

    app.route('/users/:usersID')
        .get(usersList.readUsers)
        .put(usersList.updateUsers)
        .delete(usersList.deleteUsers)
}