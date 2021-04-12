/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 20:53:17
 * @LastEditTime: 2021-04-12 23:03:37
 * @LastEditors: 阮志雄
 * @Description: In User Settings Ediv
 * @FilePath: \koa2-blog\service\index.js
 */
const { userModel } = require('../model/index');
class IndexService {
  static async Index (ctx) {
    let data = []
    await userModel.findUserData('愤怒的大雄').then(result => data = result )
    return data
   }
   static async Strings (val) {
     return val + " this is String from Service"
   }
}
module.exports = IndexService;