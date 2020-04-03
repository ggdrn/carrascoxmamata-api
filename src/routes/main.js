import { sendApiStatus } from "Controllers/main";

export default (router) => {
  // ROUTER MIDDLEWARES
  // router.use(myCustomMiddleware)

  // ROUTER ROUTES
  router.get("/", sendApiStatus);
  return router;
};
