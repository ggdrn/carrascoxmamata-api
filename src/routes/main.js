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
   *    summary: Return the api status
   *    tags:
   *      - Main
   *    responses:
   *      '200':
   *         description: A string with API status
   */
  router.get("/", sendApiStatus);
  return router;
};
