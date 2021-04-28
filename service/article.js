/*
 * @Author: 阮志雄
 * @Date: 2021-04-12 17:16:08
 * @LastEditTime: 2021-04-28 11:19:10
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\service\article.js
 */
const { articleModel } = require('../model/index');
class ArticleService {
   async Index(article) {
      let data, tags = article[5]
      await articleModel.insertPost(article).then(result => {
         data = result
         articleModel.updateTags(tags) // 更新tags
      })
      return data
   }
   async findTags () {
      let data
      await articleModel.findAllTags().then(result => {
         data = result
      })
      return data
   }
}
module.exports = new ArticleService();