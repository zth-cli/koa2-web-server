
var mysql = require('../mysql/index');


// 发表文章
let insertPost = function (value) {
    let _sql = "insert into posts set name=?,title=?,content=?,md=?,uid=?,moment=?,avator=?;"
    return mysql(_sql, value)
}
// 更新文章评论数
let updatePostComment = function (value) {
    let _sql = "update posts set comments=? where id=?"
    return mysql(_sql, value)
}

// 更新浏览数
let updatePostPv = function (value) {
    let _sql = "update posts set pv=? where id=?"
    return mysql(_sql, value)
}

// 发表评论
let insertComment = function (value) {
    let _sql = "insert into comment set name=?,content=?,moment=?,postid=?,avator=?;"
    return mysql(_sql, value)
}
// 通过名字查找用户
let findDataByName = function (name) {
    let _sql = `select * from users where name="${name}";`
    return mysql(_sql)
}
// 通过文章的名字查找用户
let findDataByUser = function (name) {
    let _sql = `select * from posts where name="${name}";`
    return mysql(_sql)
}
// 通过文章id查找
let findDataById = function (id) {
    let _sql = `select * from posts where id="${id}";`
    return mysql(_sql)
}
// 通过评论id查找
let findCommentById = function (id) {
    let _sql = `select * FROM comment where postid="${id}";`
    return mysql(_sql)
}

// 查询所有文章
let findAllPost = function () {
    let _sql = ` select * FROM posts;`
    return mysql(_sql)
}
// 查询分页文章
let findPostByPage = function (page) {
    let _sql = ` select * FROM posts limit ${(page - 1) * 10},10;`
    return mysql(_sql)
}
// 查询个人分页文章
let findPostByUserPage = function (name, page) {
    let _sql = ` select * FROM posts where name="${name}" order by id desc limit ${(page - 1) * 10},10 ;`
    return mysql(_sql)
}
// 更新修改文章
let updatePost = function (values) {
    let _sql = `update posts set  title=?,content=?,md=? where id=?`
    return mysql(_sql, values)
}
// 删除文章
let deletePost = function (id) {
    let _sql = `delete from posts where id = ${id}`
    return mysql(_sql)
}
// 删除评论
let deleteComment = function (id) {
    let _sql = `delete from comment where id=${id}`
    return mysql(_sql)
}
// 删除所有评论
let deleteAllPostComment = function (id) {
    let _sql = `delete from comment where postid=${id}`
    return mysql(_sql)
}
// 查找评论数
let findCommentLength = function (id) {
    let _sql = `select content from comment where postid in (select id from posts where id=${id})`
    return mysql(_sql)
}

// 滚动无限加载数据
let findPageById = function (page) {
    let _sql = `select * from posts limit ${(page - 1) * 5},5;`
    return mysql(_sql)
}
// 评论分页
let findCommentByPage = function (page, postId) {
    let _sql = `select * from comment where postid=${postId} order by id desc limit ${(page - 1) * 10},10;`
    return mysql(_sql)
}

module.exports = {
    findDataByName,
    insertPost,
    findAllPost,
    findPostByPage,
    findPostByUserPage,
    findDataByUser,
    findDataById,
    insertComment,
    findCommentById,
    updatePost,
    deletePost,
    deleteComment,
    findCommentLength,
    updatePostComment,
    deleteAllPostComment,
    updatePostPv,
    findPageById,
    findCommentByPage
}