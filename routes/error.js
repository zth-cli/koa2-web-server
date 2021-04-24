/*
 * @Author: 阮志雄
 * @Date: 2021-04-11 01:00:04
 * @LastEditTime: 2021-04-24 16:12:40
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\routes\error.js
 */
const router = require('koa-router')()
router.get('*', async (ctx,next)=>{
    await ctx.render('404/404', {
        title: '404',
        user:'rzx',
        token: ctx.cookies.get('token')
      })
})
module.exports = router
