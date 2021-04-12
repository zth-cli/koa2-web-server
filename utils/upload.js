/*
 * @Author: 阮志雄
 * @Date: 2021-04-11 15:09:56
 * @LastEditTime: 2021-04-11 16:59:37
 * @LastEditors: 阮志雄
 * @Description: 文件上传逻辑抽象
 * @FilePath: \koa2-blog\utils\upload.js
 */

const path = require('path');
module.exports = async (file,tempPath)=>{
    let filePath = path.join(__dirname,'..\\public\\file\\')
    // 默认头像
    let newFilepath = filePath+'default.jpg';
    let filepathArr = []
    // 如果上传的头像
    if (file) {
      console.log('file:%j', file);
      // 对图片重命名，以防名称冲突
      const newFilename = Math.random(10).toString(36) + new Date().getTime() + file.filename.split('.').pop();
      newFilepath = filePath + newFilename;
      filepathArr.push(newFilepath)
      // 把临时文件剪切到新目录取
      await fs.rename(file.filepath, newFilepath);
    }
    return filepathArr
}