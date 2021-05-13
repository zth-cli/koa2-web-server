/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 23:15:51
 * @LastEditTime: 2021-05-13 11:01:14
 * @LastEditors: rzx007
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\routes\login.js
 */
const router = require('koa-router')()
const LoginController = require('../controller/admin/login')
router.get('/login', async (ctx) => {
    await ctx.render('admin/login', { title: '注册' })
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
