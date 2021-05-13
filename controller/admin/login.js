/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 23:09:21
 * @LastEditTime: 2021-05-13 11:03:51
 * @LastEditors: rzx007
 * @Description: 用户登录注册相关逻辑
 * @FilePath: \koa2-blog\controller\admin\login.js
 */
const jwt = require("jsonwebtoken");
const moment = require("moment");
const fileUpLoad = require("../../utils/upload");
const config = require("../../config/default");
const LoginService = require("../../service/login");
const { uuid } = require("../../utils/helper");
class LoginController {
  static async signIn(ctx) {
    console.log(ctx.request.body);
    let user = {
      name: ctx.request.body.username,
      pass: ctx.request.body.password,
    };
    let data = await LoginService.findUserBypass(user);

    if (data.length > 0) {
      const token = jwt.sign(
        { name: data[0].name, id: data[0].id },
        config.jwtsign,
        { expiresIn: "2h" }
      );
      ctx.cookies.set("token", { token, username: user.name });
      ctx.success(ctx, { token });
    } else {
      ctx.fail(ctx, "登录失败,检查用户名与密码是否正确");
    }
  }
  static async signUp(ctx) {
    const time = moment().format("YYYY-MM-DD hh:mm:ss");
    let obj = [uuid(), "rzx100", "123456", "", time, time, "1"];
    // 注意 ctx.request.files 中的 files 与前端页面传入的字段相对应起来
    if (ctx.request.files) {
      const files = ctx.request.files.files;
      let pathArr = await fileUpLoad(files);
      obj[3] = pathArr[0];
      let data = await LoginService.signUp(ctx, obj);
      data&& ctx.success(ctx, pathArr[0]);
    } else {
      ctx.fail(ctx, "无上传文件");
    }
  }
}
module.exports = LoginController;
