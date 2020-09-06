const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/kapi', {
      target: 'https://m.amap.com',
      changeOrigin: true,
      pathRewrite: {
        '^/kapi': ''
      }
    }),
  )
  app.use(
    createProxyMiddleware('/apa', {
      target: 'https://blog.zdldove.top/',
      changeOrigin: true,
      pathRewrite: {
        '^/apa': ''
      }
    }),
  )
}
