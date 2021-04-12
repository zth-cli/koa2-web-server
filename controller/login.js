/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 23:09:21
 * @LastEditTime: 2021-04-12 22:51:53
 * @LastEditors: 阮志雄
 * @Description: 用户登录注册相关逻辑
 * @FilePath: \koa2-blog\controller\login.js
 */
const jwt = require('jsonwebtoken');
const fileUpLoad = require('../utils/upload')
const config = require('../config/default')
const LoginService = require('../service/login');
class LoginController {
    static async Login(ctx) {
        const token = jwt.sign({ name: '小明', id: 1 }, config.jwtsign, { expiresIn: '2h' });
        ctx.cookies.set('token', token)
        ctx.success(ctx, { token })
    }
    static async signUp(ctx) {
        let obj = { name: 'rzx', pass: '123456', avator: '', moment: '2021-04-12 22:45:16' }
        if (ctx.request.files) {
            const files = ctx.request.files.file
            let pathArr = await fileUpLoad(files)
            obj.avator = pathArr[0]
            let data = await LoginService.signUp(ctx, obj)
            ctx.success(ctx, data)
        } else {
            ctx.fail(ctx, '无上传文件')
        }

    }
}
module.exports = LoginController;