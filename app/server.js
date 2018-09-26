import koa from "koa";
import koaBody from "koa-body";
import config from "config";
import router from "./router";

const app = new koa();

app.use(koaBody({multipart: true}))
   .use(router.allowedMethods());

app.listen(process.env.PORT || config.get('server.port'));