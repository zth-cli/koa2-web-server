/*
 * @Author: 阮志雄
 * @Date: 2021-04-12 22:41:50
 * @LastEditTime: 2021-04-12 22:52:33
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\service\login.js
 */
const { userModel } = require('../model/index');
class LoginService {
     async signUp(ctx, user) { // 注册用户
        let data 
        await userModel.insertData(user).then(result => data = result)
        return data
    }
}
module.exports = new LoginService();