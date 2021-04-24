/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 17:46:55
 * @LastEditTime: 2021-04-24 16:48:10
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\routes\home.js
 */
const router = require('koa-router')()
const IndexController = require('../controller/client/home')
const auth = require('../middleware/auth')
const download = require('../utils/download')
router.get('/',  IndexController.Index)
router.get('/categories', IndexController.Categories)
router.get('/classify', IndexController.Classify)
router.get('/article/:id', IndexController.Article)

router.get('/string',  IndexController.Strings)

router.get('/json', auth(), async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/download/:name', async (ctx) => {
  const name = ctx.params.name;
  await download(ctx, name)
})
module.exports = router
