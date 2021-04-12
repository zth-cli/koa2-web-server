/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 21:21:59
 * @LastEditTime: 2021-04-12 23:01:36
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\model\user.js
 */

var mysql = require('../mysql/index');

// 注册用户
let insertData = function (user) {
    let _sql = `INSERT INTO users (name,pass,avator,moment) VALUES (${user.name},${user.pass},'','');`
    return mysql(_sql)
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