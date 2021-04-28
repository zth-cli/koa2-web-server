/*
 * @Author: 阮志雄
 * @Date: 2021-04-24 18:51:04
 * @LastEditTime: 2021-04-28 11:26:00
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\routes\article.js
 */
const router = require('koa-router')()
const ArticleController = require('../controller/admin/article')
router.post('/post/article',  ArticleController.articleCraete)
router.get('/get/tags',  ArticleController.findAllTags)
module.exports = router