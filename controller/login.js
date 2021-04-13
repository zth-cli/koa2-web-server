/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 23:09:21
 * @LastEditTime: 2021-04-13 17:31:39
 * @LastEditors: 阮志雄
 * @Description: 用户登录注册相关逻辑
 * @FilePath: \koa2-blog\controller\login.js
 */
const jwt = require('jsonwebtoken');
const fileUpLoad = require('../utils/upload')
const config = require('../config/default')
const LoginService = require('../service/login');
class LoginController {
    static async signIn(ctx) {
        console.log(ctx.request.body);
        let user = { name: ctx.request.body.userName, pass: ctx.request.body.pass }
        let data = await LoginService.findUserBypass(user)
        if (data.length>0) {
            const token = jwt.sign({ name: data[0].name, id: data[0].id }, config.jwtsign, { expiresIn: '2h' });
            ctx.cookies.set('token', token)
            ctx.success(ctx, { token })
        } else {
            ctx.fail(ctx, '登录失败')
        }
    }
    static async signUp(ctx) {
        let obj = ['rzx100', '123456', '', '2021-04-12 22:45:16']
        if (ctx.request.files) {
            const files = ctx.request.files.file
            let pathArr = await fileUpLoad(files)
            obj[2] = pathArr[0]
            let data = await LoginService.signUp(ctx, obj)
            ctx.success(ctx, data)
        } else {
            ctx.fail(ctx, '无上传文件')
        }
    }
}
module.exports = LoginController;