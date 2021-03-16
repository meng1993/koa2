const router  = require('koa-router')();

router.prefix('/demo');

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'demo test'
    })
});

router.get('/str', async (ctx, next) => {
    ctx.body = 'demo test22222'
});

router.get('/str2', async (ctx, next) => {
    ctx.body = 'demo2 test33333'
});

module.exports = router;
