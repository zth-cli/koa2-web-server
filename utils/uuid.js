/*
 * @Author: 阮志雄
 * @Date: 2021-04-11 16:08:43
 * @LastEditTime: 2021-04-11 16:09:46
 * @LastEditors: 阮志雄
 * @Description: 随机ID，uuid格式：年月日时分秒3位毫秒+3位随机数，共20位  ===>   20190312162455043167
 * @FilePath: \koa2-blog\utils\uuid.js
 */
const moment = require('moment');
exports.uuid = function uuid() {
    let uuid = moment().format('YYYYMMDDHHmmssSSS');
    uuid += (Array(3).join(0) + Math.random() * 100).slice(-3);
    return uuid;
  };