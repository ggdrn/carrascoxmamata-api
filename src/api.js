// IMPORTING MODULES
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

// IMPORTING FILES
import routes from "Routes";

const app = express();

// SETING GLOBAL MIDDLEWARES
app.use(bodyParser.json()); // SEE MORE ON https://www.npmjs.com/package/body-parser
app.use(bodyParser.urlencoded({ extended: true })); // SEE MORE ON https://www.npmjs.com/package/body-parser
app.use(helmet()); // SEE MORE ON https://www.npmjs.com/package/helmet
app.use(cors()); // SEE MORE ON https://www.npmjs.com/package/cors
app.disable("x-powered-by");

// MAPING ROUTES
routes.forEach(({ path, route }) => {
  const router = express.Router();
  app.use(path, route(router));
});

export default app;
