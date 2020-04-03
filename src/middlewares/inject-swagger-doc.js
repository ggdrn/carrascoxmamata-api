import swaggerDoc from "~/swagger.json";

export default (req, res, next) => {
  req.swaggerDoc = swaggerDoc;
  next();
};
