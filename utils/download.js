/*
 * @Author: 阮志雄
 * @Date: 2021-04-14 00:08:52
 * @LastEditTime: 2021-04-14 00:18:12
 * @LastEditors: 阮志雄
 * @Description: 文件下载功能
 * @FilePath: \koa2-blog\utils\download.js
 */
const send = require('koa-send');
module.exports = async (ctx, filePath) => {
    const path = `public/${filePath}`;
    ctx.attachment(decodeURI(path));
    await send(ctx, path);
}

// https://zhuanlan.zhihu.com/p/35064819   下载