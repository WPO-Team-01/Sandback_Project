const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://test.daground.io",
      changeOrigin: true,
      logLevel: "debug",
      pathRewrite: {
        "^/api": "",
      },
    }),
  );
};
