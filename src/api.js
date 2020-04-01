import express from "express";
import helmet from "helmet";
import cors from "cors";

import routes from "Routes";

const app = express();

// SETING MIDDLEWARES
app.use(helmet()); // SEE MORE ON https://www.npmjs.com/package/helmet
app.use(cors()); // SEE MORE ON https://www.npmjs.com/package/cors
app.disable("x-powered-by");

// MAPING ROUTES
routes.forEach(({ path, route }) => {
  const router = express.Router();
  app.use(path, route(router));
});


export default app;
