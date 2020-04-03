import swaggerUi from "swagger-ui-express-functions";
import injectSwaggerDoc from "Middlewares/inject-swagger-doc";

export default (router) => {
  // ROUTER MIDDLEWARES
  router.use(injectSwaggerDoc);
  router.use(swaggerUi.serve);

  // ROUTER ROUTES
  router.get("/", swaggerUi.setup());
  return router;
};
