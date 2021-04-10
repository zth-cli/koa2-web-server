const index = require('./home')
const users = require('./users')
const login = require('./login')
const error = require('./error')
module.exports = (app) => {
    app.use(index.routes(), index.allowedMethods())
    app.use(users.routes(), users.allowedMethods())
    app.use(login.routes(), login.allowedMethods())

    app.use(error.routes(), error.allowedMethods()) // 404放最下面
}