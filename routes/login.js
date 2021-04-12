/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 23:15:51
 * @LastEditTime: 2021-04-12 22:40:55
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\routes\login.js
 */
const router = require('koa-router')()
const LoginController = require('../controller/login')
router.get('/login', LoginController.Login)
router.post('/signup', LoginController.signUp)
router.get('/logout',  async (ctx) => {
    ctx.cookies.set('token','')
    ctx.body = {
        msg: '退出登录'
    }
})
module.exports = router
