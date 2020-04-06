var sqlMap = {
    add: 'insert into user(username, password) values(?, ?)',
    deleteById: 'delete from user where id = ?',
    update: 'update user set username=?, password=? where id=?',
    usersList: 'select * from users',
    getById: 'select * from user where id = ?',
    loginUser: 'select * from users where username = ?',
    studentById: 'select * from students where stuID = ?',
    homeworkStu: `SELECT students.stuID,students.stuName,course.courseName,homework.hwName,score.score 
                FROM students,homework,score,course
                WHERE students.stuID = score.stuID 
                AND course.courseID = homework.courseID
                AND homework.hwID = score.hwID
                AND students.stuID = ?`
};

module.exports = sqlMap;