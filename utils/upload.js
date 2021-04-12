/*
 * @Author: 阮志雄
 * @Date: 2021-04-11 15:09:56
 * @LastEditTime: 2021-04-12 22:39:57
 * @LastEditors: 阮志雄
 * @Description: 文件上传逻辑抽象,支持单文件和多文件上传
 * @FilePath: \koa2-blog\utils\upload.js
 */

const path = require('path');
const fs = require('fs');
module.exports = async (files, temp) => {
  let basePath = path.join(__dirname, '..\\public\\')
  let tempPath = temp || 'file\\'
  let filepathArr = []
  if (!fs.existsSync(basePath+tempPath)) { // 判断文件夹是否存在
    fs.mkdir((basePath+tempPath), (err) => {
      if (err) {
        throw new Error(err);
      } 
    });
  }
  if (files && files.length === undefined) { // 单文件上传
    let newFilename = await upload(files, basePath, tempPath)
    filepathArr.push(newFilename)
  } else {
    for (let file of files) {
      let newFilename = await upload(file, basePath, tempPath)
      filepathArr.push(newFilename)
    }
  }
  return filepathArr
}
// 创建文件流，保存文件
async function upload(file, basePath, tempPath) {
  const reader = fs.createReadStream(file.path)  // 创建可写流
  // 对文件重命名，以防名称冲突
  const newFilename = tempPath + Math.random(10).toString(36) + new Date().getTime() + '.' + file.name.split('.').pop();
  let newFilepath = `${basePath}${newFilename}`;
  // 把临时文件剪切到新目录取
  const upStream = fs.createWriteStream(newFilepath);
  reader.pipe(upStream);
  return newFilename
}
// https://www.jianshu.com/p/34d0e1a5ac70 文件上传

// if (!fs.existsSync(filePath)) {
//   fs.mkdir(filePath, (err) => {
//     if (err) {
//       throw new Error(err);
//     } else {
//       fileReader.pipe(writeStream);
//       ctx.body = {
//         url: uploadUrl + `/${files.name}`,
//         code: 0,
//         message: '上传成功'
//       };
//     }
//   })
