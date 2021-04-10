const { userModel } = require('../model/index');
class IndexService {
  static async Index (ctx) {
    let data = []
    await userModel.findUserData('小明').then(result => data = result )
    return data
   }
   static async Strings (val) {
     return val + " this is String from Service"
   }
}
module.exports = IndexService;