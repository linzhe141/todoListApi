var sqlMap = {
    add: 'insert into user(username, password) values(?, ?)',
    deleteById: 'delete from user where id = ?',
    update: 'update user set username=?, password=? where id=?',
    list: 'select * from login',
    getById: 'select * from user where id = ?'
};

module.exports = sqlMap;