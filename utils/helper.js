/*
 * @Author: 阮志雄
 * @Date: 2021-04-24 19:20:59
 * @LastEditTime: 2021-04-24 19:21:10
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\utils\helper.js
 */
const moment = require('moment');

// 时间格式化
exports.formatTime = time => moment(time).format('YYYY-MM-DD hh:mm:ss');
// uuid格式：年月日时分秒3位毫秒+3位随机数，共20位  ===>   20190312162455043167
exports.uuid = function uuid() {
  let uuid = moment().format('YYYYMMDDHHmmssSSS');
  uuid += (Array(3).join(0) + Math.random() * 100).slice(-3);
  return uuid;
};