const router = require('koa-router')()
const LoginController = require('../controller/login')
router.get('/login', LoginController.Login)
router.get('/logout',  async (ctx) => {
    ctx.cookies.set('token','')
    ctx.body = {
        msg: '退出登录'
    }
})
module.exports = router
