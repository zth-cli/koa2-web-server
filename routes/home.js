/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 17:46:55
 * @LastEditTime: 2021-12-31 18:51:16
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\routes\home.js
 */
const router = require('koa-router')()
const IndexController = require('../controller/client/home')
const auth = require('../middleware/auth')
const download = require('../utils/download')
router.get('/',  IndexController.Index)
router.get('/tag/:tag', IndexController.ArticleByTags)
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
  console.log(name);
  await download(ctx, name)
})
module.exports = router
