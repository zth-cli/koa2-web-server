/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 20:53:17
 * @LastEditTime: 2021-04-24 20:14:17
 * @LastEditors: 阮志雄
 * @Description: In User Settings Ediv
 * @FilePath: \koa2-blog\service\index.js
 */
const { articleModel } = require('../model/index');
class IndexService {
  static async Index(pageIndex, pageSize) {
    let data = [],total=null
    await articleModel.findPostByPage(pageIndex, pageSize).then(result => data = result)
    await articleModel.findAllSum().then(result => total = result[0].sum)
    return { data, total }
  }
  static async findDataById(id) {
    let data = []
    await articleModel.findDataById(id).then(result => data = result)
    return data
  }
  static async Strings(val) {
    return val + " this is String from Service"
  }
}
module.exports = IndexService;