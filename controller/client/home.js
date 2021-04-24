/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 20:04:35
 * @LastEditTime: 2021-04-25 00:03:56
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\controller\client\home.js
 */

const IndexService = require('../../service/index');
const path = require('path');
class IndexController {
   async Index(ctx) {
      // console.log(path.join(__dirname, '..\\public\\file'));
      const pageIndex = ctx.query.page ? ctx.query.page : 1;
      const pageSize = ctx.query.pageSize ? ctx.query.pageSize : 10;
      const { data, total } = await IndexService.Index(pageIndex, pageSize)
      await ctx.render('home/index', {
         title: 'Hello Koa 211!',
         token: ctx.cookies.get('token'),
         data,
         total,
         pageIndex: 1,
         pageNum: 1
      })
   }
   async Article(ctx) { // 文章详情页
      const id = ctx.params.id
      let data = await IndexService.findArticleById(id)
      await ctx.render('home/article', {
         list:data[0]
      })
   }
   async Tags(ctx) { // 查找此分类所有文章
      const tag = ctx.params.tag
      let data = await IndexService.findArticleByTag(tag)
      console.log(data);
      await ctx.render('home/tags', {
         typeStr:tag,
         list: data
      })
   }
   async Classify(ctx) {
      let data = await IndexService.findAllTags()
      await ctx.render('home/classify', {
         list: data
      })
   }
   async Strings(ctx) {
      let data = await IndexService.Strings('rzx')
      ctx.success(ctx, data)
   }
}
module.exports = new IndexController();