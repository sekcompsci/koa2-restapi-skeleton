import Router from 'koa-router';
const router = new Router();

router
    .get('/', ctx => {
        console.log(ctx.request);

        ctx.is('text/html');
        ctx.status = 200;
        ctx.body = `<p>GET: Hello World!</p>`;
    })
    .post('/', ctx => {
        console.log(ctx.request);

        ctx.is('text/html');
        ctx.status = 200;
        ctx.body = `<p>POST: Hello World!</p>`;
    })

export default router