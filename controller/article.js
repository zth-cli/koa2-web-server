/*
 * @Author: 阮志雄
 * @Date: 2021-04-12 17:07:54
 * @LastEditTime: 2021-04-24 22:04:49
 * @LastEditors: 阮志雄
 * @Description: 文章相关逻辑
 * @FilePath: \koa2-blog\controller\article.js
 */
const moment = require('moment');
const md = require('markdown-it')();
const utils = require('../utils/helper')
const ArticleService = require('../service/article');
class ArticleController {
    async articleCraete(ctx) {
        const nowTime = new Date();
        let { title, detail, content } = ctx.request.body,
            name = ctx.cookies.get('token'),
            create_time = moment(nowTime).format('YYYY-MM-DD HH:mm:ss'),
            update_time = moment(nowTime).format('YYYY-MM-DD HH:mm:ss'),
            id = utils.uuid(),
            author = 'rzx';
        let data = await ArticleService.Index([title, md.render(content), create_time, id, 1, 'Javascript', md.render(detail), update_time, '/article/' + id, author])
        if (data.affectedRows) {
            ctx.success(ctx)
        } else {
            ctx.fail(ctx, data)
        }

    }
}
module.exports = new ArticleController();