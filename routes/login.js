/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 23:15:51
 * @LastEditTime: 2021-04-24 16:07:23
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\routes\login.js
 */
const router = require('koa-router')()
const LoginController = require('../controller/login')
router.get('/login', async (ctx) => {
    await ctx.render('home/tags', {title: '登录' })
})
router.post('/signin', LoginController.signIn) // 登录
router.post('/signup', LoginController.signUp) // 注册
router.get('/logout', async (ctx) => {
    ctx.cookies.set('token', '')
    ctx.body = {
        msg: '退出登录'
    }
})
module.exports = router
