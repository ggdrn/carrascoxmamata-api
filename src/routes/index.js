import main from "./main";
import apiDocs from "./api-docs";

export default [{
  path: "/",
  route: main
}, {
  path: "/docs",
  route: apiDocs
}];
