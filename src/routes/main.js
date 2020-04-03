import { sendApiStatus } from "Controllers/main";

export default (router) => {
  // ROUTER MIDDLEWARES
  // router.use(myCustomMiddleware)

  // ROUTER ROUTES
  /**
   * @swagger
   * /:
   *  get:
   *    description: Return the api status
   *    responses:
   *      '200':
   *         description: A ssuccess response
   */
  router.get("/", sendApiStatus);
  return router;
};
