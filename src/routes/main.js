import { sendApiStatus } from "Controllers/main";

export default (router) => {
  // ROUTER MIDDLEWARES
  // router.use(myCustomMiddleware)

  // ROUTER ROUTES
  // See more about swagger documentation structure here https://swagger.io/docs/specification/basic-structure/
  /**
   * @swagger
   * /:
   *  get:
   *    description: Return the api status
   *    responses:
   *      '200':
   *         description: A string with API status
   */
  router.get("/", sendApiStatus);
  return router;
};
