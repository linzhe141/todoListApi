var sqlMap = {
    add: 'insert into user(username, password) values(?, ?)',
    deleteById: 'delete from user where id = ?',
    update: 'update user set username=?, password=? where id=?',
    usersList: 'select * from users',
    getById: 'select * from user where id = ?',
    loginUser: 'select * from users where username = ?',
    studentById: 'select * from students where stuID = ?',
    listStuClass: `SELECT * FROM students
                WHERE classID = ?`,
    homeworkStu: `SELECT students.stuID,students.stuName,course.courseName,homework.hwID,homework.hwName,homework.endDate 
                FROM homework,hwClass,teachers,students,course,courseClass
                WHERE homework.hwID = hwClass.hwID
                and hwClass.classID = students.classID
                and teachers.courseID = homework.courseID
                and students.classID = courseClass.classID
                and courseClass.courseID = homework.courseID
                and teachers.courseID = course.courseID
                and students.stuID = ?`,
    specHw: `select * from score, homework where score.hwID = homework.hwID
                AND score.hwID = ?
                AND score.stuID = ?`,
    updateScoreFile: `update score set state =0,stuHwFile = ? where hwID = ? and stuID = ?`,
    teacherInfo: `SELECT * FROM teachers,course
                WHERE course.courseID = teachers.courseID
                AND teachers.tchID = ?`,
    createHomework: `insert into homework(courseID,hwName,hwDesc,hwContent,startDate,endDate,hwFile) 
                values(?,?,?,?,?,?,?)`,
    createScore: `INSERT INTO score(hwID,stuID) VALUES(?,?)`,
    createHwClass: `INSERT INTO hwClass(classID) VALUES(?)`,
    teacherClassinfo: `SELECT classgrade.classID, classgrade.className FROM teachers,courseClass,course,classgrade
                WHERE teachers.courseID = courseClass.courseID
                AND course.courseID = courseClass.courseID
                AND classgrade.classID = courseClass.classID
                AND teachers.tchID = ?
                `,
    listhomeworClass: `SELECT * FROM homework,hwClass,teachers
                WHERE homework.hwID = hwClass.hwID
                and teachers.courseID = homework.courseID
                AND teachers.tchID = ?
                AND hwClass.classID = ?`,
    deleteHomeWorkBy: `delete from homework where hwID = ?`,
    deleteHwClassBy: `delete from hwClass where hwID = ?`,
    homeworkSpec: `SELECT * FROM homework
                WHERE hwID = ?`,
    listhwComplet: `SELECT * FROM homework,students,hwClass,score
                WHERE homework.hwID = hwClass.hwID 
                AND students.classID = hwClass.classID
                AND score.hwID = homework.hwID
                AND students.stuID = score.stuID
                AND homework.hwID = ?
                GROUP BY students.stuID`,
    listHomework: ``,
    getMaxHwID:`SELECT  max(hwID)  FROM  homework;`,
    updateScore: `update score set state=?,score=?,comments=?,resultFile=? 
                where hwID=?
                and stuID=?`,
    updateScoreResultFile: `update score set resultFile=? 
                where hwID=?
                and stuID=?
                `,
    updateHomework: `update homework set endDate = ? where hwID= ?`
    
};

module.exports = sqlMap;