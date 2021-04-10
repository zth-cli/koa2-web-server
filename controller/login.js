const jwt = require('jsonwebtoken');
const config = require('../config/default')
class LoginController {
    static async Login(ctx) {
        const token = jwt.sign({
            name: '小明',
            id: 1
        }, config.jwtsign, { expiresIn: '2h' });
        ctx.cookies.set('token', token)
        ctx.success (ctx,{ token })
    }
}
module.exports = LoginController;