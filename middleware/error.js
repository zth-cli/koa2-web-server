/*
 * @Author: 阮志雄
 * @Date: 2021-04-11 01:09:44
 * @LastEditTime: 2021-04-11 17:45:09
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\middleware\error.js
 */
module.exports = () => {
    return async (ctx, next) => {
        await next()
        if (ctx.status === 403||ctx.status === 500) {
            await ctx.render('index', {
                title: ctx.status,
                user: 'rzx',
                token: ctx.cookies.get('token')
            })
        }
    };
};