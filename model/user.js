
var mysql = require('../mysql/index');

// 注册用户
let insertData = function (value) {
    let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
    return mysql(_sql, value)
}
// 删除用户
let deleteUserData = function (name) {
    let _sql = `delete from users where name="${name}";`
    return mysql(_sql)
}
// 查找用户
let findUserData = function (name) {
    let _sql = `select * from users where name="${name}";`
    return mysql(_sql)
}

module.exports = { insertData, deleteUserData, findUserData }