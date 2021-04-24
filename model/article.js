
var mysql = require('../mysql/index');


// 发表文章
let insertPost = function (value) {
    let _sql = "insert into article set title=?,content=?,create_time=?,id=?,invisible=?,tags=?,detail=?,update_time=?,url=?,author=?;"
    return mysql(_sql, value)
}
// 通过文章的名字查找用户
let findDataByUser = function (title) {
    let _sql = `select * from article where title="${title}";`
    return mysql(_sql)
}
// 查询所有文章
let findAllSum = function () {
    let _sql = `select count(*) as sum FROM article;`
    return mysql(_sql)
}
// 查询分页文章
let findPostByPage = function (page, pageSize) {
    let _sql = ` select * FROM article limit ${(page - 1) * 10},${pageSize};`
    return mysql(_sql)
}
// 通过文章id查找
let findDataById = function (id) {
    let _sql = `select * from article where id="${id}";`
    return mysql(_sql)
}
// 更新修改文章
let updatePost = function (values) {
    let _sql = `update article set content=?,md=? where id=?`
    return mysql(_sql, values)
}
// 删除文章
let deletePost = function (id) {
    let _sql = `delete from article where id = ${id}`
    return mysql(_sql)
}
// 滚动无限加载数据
let findPageById = function (page) {
    let _sql = `select * from article limit ${(page - 1) * 5},5;`
    return mysql(_sql)
}
// 新增文章时更新tags
let updateTags = function (tagStr) {
    let _sql = `update classify set num = num + 1 where POSITION( type IN '${tagStr}');`
    return mysql(_sql)
}
// 新增tag
let insetTags = function (tagStr) {
    let _sql = `inset into classify (num, type) values (1, tagStr)`
    return mysql(_sql)
}
// 查询tag
let findAllTags = function (tag='') {
    let _sql = tag ? `select * from classify where type like '%${tag}%';` : `select * from classify;`
    return mysql(_sql)
}
//  根据tag查文章
let findDataByTag  = function (tag) {
    let _sql = `select title,url,id,DATE_FORMAT(create_time,'%Y-%m-%d') as create_time from article where tags like "%${tag}%" and invisible = 1;`
    return mysql(_sql)
    // %Y-%m-%d %H:%i:%s
}


// 更新文章评论数
let updatePostComment = function (value) {
    let _sql = "update article set comments=? where id=?"
    return mysql(_sql, value)
}
// 发表评论
let insertComment = function (value) {
    let _sql = "insert into comment set title=?,content=?,moment=?,postid=?,avator=?;"
    return mysql(_sql, value)
}
// 通过名字查找用户
let findDataByName = function (title) {
    let _sql = `select * from user where username="${title}";`
    return mysql(_sql)
}

// 通过评论id查找
let findCommentById = function (id) {
    let _sql = `select * FROM comment where postid="${id}";`
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
    let _sql = `select content from comment where postid in (select id from article where id=${id})`
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
    findAllSum,
    findPostByPage,
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
    findPageById,
    findCommentByPage,
    updateTags,
    insetTags,
    findAllTags,
    findDataByTag
}