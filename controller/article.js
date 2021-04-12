/*
 * @Author: 阮志雄
 * @Date: 2021-04-12 17:07:54
 * @LastEditTime: 2021-04-12 17:25:04
 * @LastEditors: 阮志雄
 * @Description: 文章相关逻辑
 * @FilePath: \koa2-blog\controller\article.js
 */
const md = require('markdown-it')(); 
const ArticleService = require('../service/article');
class ArticleController {
   async articleCraete (ctx) {
    let {title,content} = ctx.request.body,
    name = ctx.cookies.get('token'),
    time = moment().format('YYYY-MM-DD HH:mm:ss'),
    avator,
    // 现在使用markdown不需要单独转义
    content = content.replace(/[<">']/g, (target) => {
        return { '<': '&lt;', '"': '&quot;', '>': '&gt;', "'": '&#39;' }[target]
    }),
    title = title.replace(/[<">']/g, (target) => {
        return { '<': '&lt;', '"': '&quot;','>': '&gt;', "'": '&#39;' }[target]
    });
    let data = await ArticleService.Index([name, newTitle, md.render(content), content, id, time, avator])
    .then(() => {
        ctx.success (ctx,data)
    }).catch(() => {
        ctx.fail (ctx)
    })
   }
}
module.exports = new ArticleController();