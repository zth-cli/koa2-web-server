/*
 * @Author: 阮志雄
 * @Date: 2021-04-24 18:51:04
 * @LastEditTime: 2021-04-24 18:53:06
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\routes\article.js
 */
const router = require('koa-router')()
const ArticleController = require('../controller/article')
router.post('/post/article',  ArticleController.articleCraete)
module.exports = router