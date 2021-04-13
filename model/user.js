/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 21:21:59
 * @LastEditTime: 2021-04-13 17:20:58
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\model\user.js
 */

var mysql = require('../mysql/index');

// 注册用户
let insertData = function (value) {
    let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
    return mysql(_sql,value)
}
// 删除用户
let deleteUserData = function (name) {
    let _sql = `delete from users where name="${name}";`
    return mysql(_sql)
}
// 查找用户
let findUserData = function (name, pass='123456') {
    let _sql = `select * from users where name="${name}" and pass=${pass};`
    return mysql(_sql)
}

module.exports = { insertData, deleteUserData, findUserData }