module.exports = () => {
    return async (ctx, next) => {
        await next()
        console.log(ctx.status,'hahah');
        if (ctx.status === 403 || ctx.status === 500) {
            ctx.render('index', {
                title: ctx.status,
                user: 'rzx',
                token: ctx.cookies.get('token')
            })
        }
    };
};