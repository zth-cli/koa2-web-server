/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 23:09:21
 * @LastEditTime: 2021-04-11 17:39:51
 * @LastEditors: 阮志雄
 * @Description: 用户登录注册相关逻辑
 * @FilePath: \koa2-blog\controller\login.js
 */
const jwt = require('jsonwebtoken');
const fileUpLoad = require('../utils/upload')
const config = require('../config/default')
class LoginController {
    static async Login(ctx) {
        const token = jwt.sign({
            name: '小明',
            id: 1
        }, config.jwtsign, { expiresIn: '2h' });
        ctx.cookies.set('token', token)
        ctx.success(ctx, { token })
    }
    static async Signup(ctx) {
        let data = ctx.request.body
        console.log(ctx.request.body);
        if (ctx.request.file) {
            const avatar = ctx.request.file[0];
            let pathArr = await fileUpLoad(avatar)
            ctx.success(ctx, { pathArr,data })
        } else {
            ctx.fail(ctx,'无上传文件')
        }

    }
}
module.exports = LoginController;