const IndexService = require('../service/index');
class IndexController {
  static async Index (ctx) {
    let data = await IndexService.Index(ctx)
    ctx.status = 500
    await ctx.render('index', {
        title: 'Hello Koa 211!',
        user:JSON.stringify(data),
        token: ctx.cookies.get('token')
      })
   }
   static async Strings (ctx) {
     let data = await IndexService.Strings('rzx')
     ctx.success (ctx,data)
     
   }
}
module.exports = IndexController;