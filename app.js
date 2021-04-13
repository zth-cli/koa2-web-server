/*
 * @Author: 阮志雄
 * @Date: 2021-04-10 17:46:55
 * @LastEditTime: 2021-04-13 17:13:39
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \koa2-blog\app.js
 */
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const koaBody = require('koa-body') // 解析文件上传
const logger = require('koa-logger')
const cors = require('koa2-cors')
const routes = require('./routes/index')
const serviceError = require('./middleware/error')
app.context.success = ( ctx, res = null, msg = '请求成功' ) => {
  ctx.body = { code: 1, data: res, msg };
  ctx.status = 200;
};
app.context.fail = (ctx, res = null, msg = '请求失败') => {
  ctx.body = { code: 0,data: res,msg };
};
// error handler

onerror(app)
app.use(serviceError())
app.use(cors())
// middlewares
app.use(koaBody({
  multipart: true,
  formidable: {
      maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
}))
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public')) // 内置中间件，处理静态资源

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
routes(app)
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
