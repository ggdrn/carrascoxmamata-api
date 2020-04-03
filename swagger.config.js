const { description, version } = require("./package.json");
module.exports = {
  swagger: {
    openapi: "3.0.3",
    info: {
      title: "Sample Firebase Functions API",
      description,
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.example.com/support",
        email: "support@example.com"
      },
      // license: {
      //   name: "Apache 2.0",
      //   url: "https://www.apache.org/licenses/LICENSE-2.0.html"
      // },
      version
    },
  },
  // Print the swagger.json readably.
  prettyJson: true,
};
