/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 23:55:29
 * @LastEditTime: 2021-04-24 18:51:43
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\routes\index.js
 */
const index = require('./home')
const article = require('./article')
const users = require('./users')
const login = require('./login')
const error = require('./error')
module.exports = (app) => {
    app.use(index.routes(), index.allowedMethods())
    app.use(users.routes(), users.allowedMethods())
    app.use(login.routes(), login.allowedMethods())
    app.use(article.routes(), article.allowedMethods())

    app.use(error.routes(), error.allowedMethods()) // 404放最下面
}