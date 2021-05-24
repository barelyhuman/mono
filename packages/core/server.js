import Koa from "koa";
import cors from "@koa/cors";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";
import { PLANS } from "@mono/shared";

const PORT = process.env.PORT || 3000;

const app = new Koa();

const rootRouter = new Router();

rootRouter.get("/ping", (ctx) => {
  ctx.body = { status: "OK" };
});

app.use(cors()).use(bodyParser()).use(rootRouter.routes());

app.listen(PORT, () => {
  console.log(`Loaded Shared,${JSON.stringify(PLANS, null, 2)}`);
  console.log(`Listening on ${PORT}`);
});
