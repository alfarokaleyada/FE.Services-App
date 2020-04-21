const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    'api/v1/register',
    createProxyMiddleware({
      target: 'https://localhost:3001',
        changeOrigin: true,
        secure: false
    })
    );


};