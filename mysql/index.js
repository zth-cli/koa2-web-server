/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 21:23:15
 * @LastEditTime: 2021-04-24 20:09:19
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\mysql\index.js
 */
var mysql = require('mysql');
var config = require('../config/default.js')
var db = require('../mysql/db')

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});
let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}
// 建表
for (const key in db) {
  query(db[key], [])
}
module.exports = query