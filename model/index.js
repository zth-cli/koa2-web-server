var mysql = require('../mysql/index');
var userModel = require('./user');
var articleModel = require('./article');

let createTable = function (sql) {
    return mysql(sql, [])
}
module.exports = {
    mysql,
    createTable,
    userModel,
    articleModel
}