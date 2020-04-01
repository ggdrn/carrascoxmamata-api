import { sendApiStatus } from "Controllers/main";

export default (router) => {
  router.get("/", sendApiStatus);
  return router;
};
