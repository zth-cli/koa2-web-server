/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 20:04:35
 * @LastEditTime: 2021-04-12 17:25:38
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\controller\home.js
 */

const IndexService = require('../service/index');
const path = require('path');
class IndexController {
   async Index (ctx) {
    let data = await IndexService.Index(ctx)
    console.log( path.join(__dirname,'..\\public\\file'));
    await ctx.render('index', {
        title: 'Hello Koa 211!',
        user:JSON.stringify(data),
        token: ctx.cookies.get('token')
      })
   }
    async Dashboard (ctx) {
    await ctx.render('dashboard')
   }
    async Strings (ctx) {
     let data = await IndexService.Strings('rzx')
     ctx.success (ctx,data)
     
   }
}
module.exports = new IndexController();