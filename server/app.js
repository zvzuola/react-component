let koa = require('koa');
let routerRegister = require('./router');
let render = require('koa-ejs');
let staticFile = require('koa-static');
let path = require('path');
let app = new koa();
let router = require('koa-router')();

render(app, {
    root: path.join(__dirname, '../client/layout'),
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: true
});

//静态文件处理
app.use(staticFile(path.resolve(__dirname, '../public')));

routerRegister(router);

app.use(router.routes())
    .use((router.allowedMethods()));

app.listen(9002, () => {
    console.log('listening on port 9002...');
})
