async function index(ctx) {
    await ctx.render('index', { title: 'react-component' });
}


module.exports = (router) => {
    router.get('/', index);
}