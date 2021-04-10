const jwt = require('jsonwebtoken');
const config = require('../config/default')
module.exports = () => {
  return async (ctx, next)=> {
    try {
      const decode = jwt.verify(ctx.cookies.get('token'), config.jwtsign);
      await next(); // 这里因为next之后的操作是异步的所以需要加 await
    } catch (err) {
      console.log(err);
      ctx.status = 401;
      ctx.body = {
        errcode: 1,
        msg: '授权失败，请重新登录',
      };
      ctx.redirect('/login');
      return;
    }
  };
};

// https://blog.csdn.net/weixin_45578480/article/details/104718436
// https://blog.csdn.net/sinat_17775997/article/details/83148024