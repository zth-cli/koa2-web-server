/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 21:21:59
 * @LastEditTime: 2021-04-24 18:35:31
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\model\user.js
 */

var mysql = require('../mysql/index');

// 注册用户
let insertData = function (value) {
    let _sql = "insert into user set id=?, username=?,password=?,avator_url=?,create_time=?,update_time=?, phone=?;"
    return mysql(_sql,value)
}
// 删除用户
let deleteUserData = function (id) {
    let _sql = `delete from user where id="${id}";`
    return mysql(_sql)
}
// 查找用户
let findUserData = function (username, password='123456') {
    let _sql = `select * from user where username="${username}" and password=${password};`
    return mysql(_sql)
}

module.exports = { insertData, deleteUserData, findUserData }