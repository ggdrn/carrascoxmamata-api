import express from "express";
import helmet from "helmet";
import cors from "cors";

import routes from "@/routes";

const app = express();

// SETING MIDDLEWARES
app.use(helmet());
app.use(cors());
app.disable("x-powered-by");

// MAPING ROUTES
routes.forEach(({ path, route }) => {
  const router = express.Router();
  app.use(path, route(router));
});


export default app;
