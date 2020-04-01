import { sendApiStatus } from "@/controllers/main";

export default (router) => {
  router.get("/", sendApiStatus);
  return router;
};
