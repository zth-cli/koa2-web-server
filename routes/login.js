/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 23:15:51
 * @LastEditTime: 2021-04-11 16:21:56
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\routes\login.js
 */
const router = require('koa-router')()
const LoginController = require('../controller/login')
router.get('/login', LoginController.Login)
router.post('/signup', LoginController.Signup)
router.get('/logout',  async (ctx) => {
    ctx.cookies.set('token','')
    ctx.body = {
        msg: '退出登录'
    }
})
module.exports = router
