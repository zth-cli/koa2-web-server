const router = require('koa-router')()
const IndexController = require('../controller/home')
const auth = require('../middleware/auth')
router.get('/', auth(), IndexController.Index)

router.get('/dashboard', auth(), IndexController.Dashboard)

router.get('/string', auth(), IndexController.Strings)

router.get('/json', auth(), async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
