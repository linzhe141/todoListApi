module.exports = function (app) {
    const usersList = require('../controllers/usersListController')
    const score = require('../controllers/scoreController')
    const student = require('../controllers/studentController')
    const teacher = require('../controllers/teacherController')
    const classgrade = require('../controllers/classgradeController')
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

    app.route('/downloadResultFile')
        .post(student.downloadResultFile)
    app.route('/upload')
        .post(student.upload)

    app.route('/usersList')
        .get(usersList.listAllUsers)
    // .post(usersList.createUsers)

    app.route('/teacherList')
        .get(teacher.listTeacher)
    // .post(usersList.createUsers)

    app.route('/teachers/:tchName')
        .get(teacher.readTeacher)

    app.route('/classList')
        .get(classgrade.listClassgrade)
    app.route('/classgrade/:classID')
        .get(classgrade.readClassgrade)

    app.route('/users/:usersID')
        .get(usersList.readUsers)
        .put(usersList.updateUsers)
        .delete(usersList.deleteUsers)

    app.route('/teachers/:tchID')
        .put(usersList.updateUsers)
        .delete(teacher.deleteTeacher)

    app.route('/studentList')
        .get(student.listStudent)
    app.route('/students/:stuID')
        .get(student.readStudent)
        .delete(student.deleteStudent)

    app.route('/updateScore')
        .post(teacher.updateScore)

    app.route('/uploadResultFile')
        .post(score.uploadScoreResultFile)

    app.route('/addTeacher')
        .post(teacher.addTeacher)
    app.route('/addStudent')
        .post(student.addStudent)

    app.route('/user/changePwd/:userID')
        .post(usersList.changePwd)

    app.route('/downloadHwFile')
        .post(teacher.download)
}