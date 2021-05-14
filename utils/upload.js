/*
 * @Author: 阮志雄
 * @Date: 2021-04-11 15:09:56
 * @LastEditTime: 2021-05-14 11:40:40
 * @LastEditors: rzx007
 * @Description: 文件上传逻辑抽象,支持单文件和多文件上传
 * @FilePath: \koa2-blog\utils\upload.js
 */

const path = require('path');
const fs = require('mz/fs');
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
  for (let key in files) {
    let newFilename = await upload(files[key], basePath, tempPath)
    filepathArr.push(newFilename)
  }
  return filepathArr
}
// 创建文件流，保存文件
async function upload(file, basePath, tempPath) {
  try {
  const reader = fs.createReadStream(file.path)  // 创建可写流
  // 对文件重命名，以防名称冲突
  const newFilename = tempPath + Math.random(10).toString(36) + new Date().getTime() + '.' + file.name.split('.').pop();
  let newFilepath = `${basePath}${newFilename}`;
  // 把临时文件剪切到新目录取
  const upStream = fs.createWriteStream(newFilepath);
  reader.pipe(upStream);
  return newFilename
  } finally {
    // 需要删除临时文件
    console.log('-----12212----');
    await fs.unlink(file.path);
  }
  
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
