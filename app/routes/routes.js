module.exports = function(app){
    const usersList = require('../controllers/usersListController')
    const score = require('../controllers/scoreController')
    const student = require('../controllers/studentController')
    const teacher = require('../controllers/teacherController')
    app.route('/login')
        .post(usersList.loginUsers)

    app.route('/stuHomework')
        .get(score.StuHomeworkSpec) // 作业详细信息
        .post(score.findStuHomeworkBy)

    app.route('/teacherInfo')
        .get(teacher.teacherInfo)

    app.route('/teacherClassOptions')
        .post(teacher.teacherClassOptions)

    app.route('/homeworkDelete')
        .delete(teacher.deleteHomework)

    app.route('/homeworkUpdate')
        .put(teacher.updateHomework)

    app.route('/homeworkClass')
        .get(teacher.listHomeworClass)

    app.route('/homeworkInfo')
        .get(teacher.HomeworkSpec)

    app.route('/hwComplet')
    .get(teacher.listHwComplet)
    
    app.route('/createHomework')
        .post(teacher.createHomework)

    app.route('/download')
        .post(student.download)

    app.route('/upload')
        .post(student.upload)

    app.route('/users')
        .get(usersList.listAllUsers)
        .post(usersList.createUsers)

    app.route('/users/:usersID')
        .get(usersList.readUsers)
        .put(usersList.updateUsers)
        .delete(usersList.deleteUsers)

    app.route('/updateScore')
        .post(teacher.updateScore)

    app.route('/uploadResultFile')
        .post(score.uploadScoreResultFile)
}